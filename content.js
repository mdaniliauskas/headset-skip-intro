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

  console.log(`[Headset Skip Intro] ✅ Ativo em: ${host}`);
})();
