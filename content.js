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

  // ─── MutationObserver: detecta quando botão aparece no DOM ───────────────
  const observer = new MutationObserver(() => {
    for (const sel of ALL_SELECTORS) {
      const btn = document.querySelector(sel);
      if (btn && btn.offsetParent !== null) {
        console.log(`[Headset Skip Intro] 🔍 Botão de skip visível: "${sel}" — pressione MediaPlayPause para pular.`);
        return;
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style", "hidden"],
  });

  // ─── Message Listener: Executa o clique real quando o background pede ────
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "skip-intro") {
      // 1. Tenta pular abertura
      for (const sel of ALL_SELECTORS) {
        const btn = document.querySelector(sel);
        // Removemos a checagem "btn.offsetParent !== null" na hora do clique
        // Motivo: Netflix e Prime muitas vezes escondem a barra de controles por inatividade.
        // O botão continua existindo no DOM (com display: none ou hidden), mas precisamos
        // forçar o clique nele mesm assim. O MutationObserver garante que ele só exista na abaertaura.
        if (btn) {
          console.log(`[Headset Skip Intro] 🎯 Executando skip no seletor: ${sel}`);
          btn.click();
          btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
          sendResponse({ clicked: true });
          return true;
        }
      }

      // 2. Fallback Play/Pause (se for o top window / tiver video real na tela)
      const video = document.querySelector("video");
      if (video) {
        console.log("[Headset Skip Intro] ⏯️ Nenhum botão de skip achado. Toggling Play/Pause.");
        video.paused ? video.play() : video.pause();
        sendResponse({ clicked: true });
        return true;
      }

      sendResponse({ clicked: false });
    }
    return true;
  });

  console.log(`[Headset Skip Intro] ✅ Ativo e ouvindo em: ${host}`);
})();
