(function () {
  "use strict";

  const SKIP_SELECTORS = [
    '[data-testid="skipIntroText"]',
    '[data-testid="skip-intro-button"]',
    '.erc-skip-intro-button',
  ];

  let skipButton = null;

  function findSkipButton() {
    for (const sel of SKIP_SELECTORS) {
      const el = document.querySelector(sel);
      if (el) return el; // sem checar offsetParent — dentro do iframe pode ser null mesmo visível
    }
    return null;
  }

  function simulateClick(el) {
    el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
    el.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, cancelable: true }));
    el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    console.log("[HSI] PointerEvent+click enviado para:", el.dataset.testid || el.className);
  }

  // Observer — memoriza o botão assim que aparecer
  const observer = new MutationObserver(() => {
    const btn = findSkipButton();
    if (btn && !skipButton) {
      skipButton = btn;
      console.log("[HSI] Botão pronto:", btn.dataset.testid);
    } else if (!btn) {
      skipButton = null;
    }
  });

  observer.observe(document.body, {
    childList: true, subtree: true,
    attributes: true, attributeFilter: ["class", "style", "hidden"],
  });

  // Responde ao fone
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action !== "skip-intro") return;

    const btn = findSkipButton() || skipButton;
    console.log("[HSI] Mensagem recebida. Botão:", btn ? btn.dataset.testid : "NÃO ENCONTRADO");

    if (btn) {
      simulateClick(btn);
      skipButton = null;
      sendResponse({ clicked: true });
    } else {
      const video = document.querySelector("video");
      if (video) video.paused ? video.play() : video.pause();
      sendResponse({ clicked: false });
    }
    return true;
  });

  console.log("[HSI] iframe monitorado:", window.location.href);
})();