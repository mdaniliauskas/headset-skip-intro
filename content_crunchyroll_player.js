(function () {
  "use strict";

  const SKIP_SELECTORS = [
    '[data-testid="skipIntroText"]',
    '[data-testid="skip-intro-button"]',
    '.erc-skip-intro-button',
  ];

  function findSkipButton() {
    for (const sel of SKIP_SELECTORS) {
      const el = document.querySelector(sel);
      if (el) return el; // sem checar offsetParent — dentro do iframe pode ser null mesmo visível
    }
    return null;
  }

  function simulateClick(el) {
    const opts = { bubbles: true, cancelable: true, view: window };
    el.dispatchEvent(new PointerEvent("pointerdown", opts));
    el.dispatchEvent(new MouseEvent("mousedown", opts));
    el.dispatchEvent(new PointerEvent("pointerup", opts));
    el.dispatchEvent(new MouseEvent("mouseup", opts));
    el.dispatchEvent(new MouseEvent("click", opts));
    console.log("[HSI] simulateClick enviado para:", el.dataset.testid || el.className);
  }

  // Observers removidos para máxima economia de CPU/Bateria.
  // A busca pelo botão ocorre perfeitamente no momento do clique,
  // não justificando o fardo de um MutationObserver avaliando
  // renderizações React constantes.

  // Responde ao fone
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action !== "skip-intro") return;

    const btn = findSkipButton();
    console.log("[HSI] Mensagem recebida. Botão:", btn ? btn.dataset.testid : "NÃO ENCONTRADO");

    if (btn) {
      simulateClick(btn);
      skipButton = null;
      sendResponse({ clicked: true });
    } else {
      console.log("[HSI] Nenhum botão de skip. Alternando estado do vídeo diretamente.");

      const videos = document.querySelectorAll("video");
      let actedOnVideo = false;

      videos.forEach((video) => {
        if (video.readyState >= 1) { // Só precisa ter metadata para dar play/pause
          if (video.paused) {
            console.log("[HSI] ▶️ Iniciando vídeo...");
            video.play().catch(e => console.error("[HSI] Erro ao dar play (pode exigir interação prévia):", e));
          } else {
            console.log("[HSI] ⏸️ Pausando vídeo...");
            video.pause();
          }
          actedOnVideo = true;
        }
      });

      if (!actedOnVideo) {
        console.log("[HSI] Nenhum vídeo carregado encontrado no iframe.");
      }

      sendResponse({ clicked: actedOnVideo });
    }
    return true;
  });

  console.log("[HSI] iframe monitorado:", window.location.href);
})();