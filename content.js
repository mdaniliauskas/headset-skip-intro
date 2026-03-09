// content.js — Injetado nas páginas de streaming
// Fica observando o DOM para logar quando botões de skip aparecem,
// facilitando diagnóstico. O clique em si é disparado pelo background.js.

(function () {
  "use strict";

  const host = window.location.hostname;

  // ─── Seletores para observação (mesmo conjunto do background) ─────────────
  const ALL_SELECTORS = [
    // Crunchyroll
    'div[data-testid="skipIntroText"]',
    'div[data-testid="skip-intro-button"]',
    '.erc-skip-intro-button',
    // Prime Video
    '.skipelement',
    'button[data-testid="skip-button"]',
    '.atvwebplayersdk-skipelement-button',
    // Netflix
    '[data-uia="player-skip-intro"]',
    '[data-uia="player-skip-recap"]',
    '.watch-video--skip-content button',
  ];

  // ─── Observers removidos para máxima economia de CPU/Bateria ───
  // A busca pelo botão ocorre no momento exato do clique
  // (acionado pelo background.js quando o headset avisa).

  // ─── Message Listener: Executa o clique real quando o background pede ────
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "skip-intro") {
      // 1. Tenta pular abertura
      for (const sel of ALL_SELECTORS) {
        const btn = document.querySelector(sel);
        if (btn) {
          console.log(`[Headset Skip Intro] 🎯 Executando skip no seletor: ${sel}`);
          simulateClick(btn);
          sendResponse({ clicked: true });
          return true;
        }
      }

      // 1.5 Abortar se for o frame principal do Crunchyroll (sem vídeo)
      if (host.includes("crunchyroll.com") && document.querySelectorAll("video").length === 0) {
        console.log("[Headset Skip Intro] Main frame do Crunchyroll ignorando Play/Pause (o iframe cuida disso).");
        sendResponse({ clicked: false });
        return true;
      }

      // 2. Fallback Play/Pause: Manipulando a API de vídeo do HTML5 diretamente (funciona em abas inativas)
      console.log("[Headset Skip Intro] ⏯️ Nenhum botão de skip achado. Alternando estado do vídeo diretamente.");

      const videos = document.querySelectorAll("video");
      let actedOnVideo = false;

      videos.forEach((video) => {
        if (video.readyState >= 1) {
          if (video.paused) {
            console.log("[Headset Skip Intro] ▶️ Iniciando vídeo...");
            video.play().catch(e => console.error("[Headset Skip Intro] Erro ao dar play (pode exigir interação prévia):", e));
          } else {
            console.log("[Headset Skip Intro] ⏸️ Pausando vídeo...");
            video.pause();
          }
          actedOnVideo = true;
        }
      });

      if (!actedOnVideo) {
        console.log("[Headset Skip Intro] Nenhum vídeo carregado encontrado na página.");
      }

      sendResponse({ clicked: actedOnVideo });
      return true;
    }
    return true;
  });

  function simulateClick(el) {
    const opts = { bubbles: true, cancelable: true, view: window };
    el.dispatchEvent(new PointerEvent("pointerdown", opts));
    el.dispatchEvent(new MouseEvent("mousedown", opts));
    el.dispatchEvent(new PointerEvent("pointerup", opts));
    el.dispatchEvent(new MouseEvent("mouseup", opts));
    el.dispatchEvent(new MouseEvent("click", opts));
  }

  console.log(`[Headset Skip Intro] ✅ Ativo e ouvindo em: ${host}`);
})();
