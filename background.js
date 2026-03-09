// background.js — Service Worker (Manifest V3)

chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "skip-intro") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  const isCrunchyroll = tab.url?.includes("crunchyroll.com");

  if (isCrunchyroll) {
    // Botão fica dentro do iframe — envia mensagem para todos os frames
    // O content_crunchyroll_player.js está injetado no iframe e vai responder
    chrome.webNavigation.getAllFrames({ tabId: tab.id }, (frames) => {
      if (!frames) return;
      frames.forEach((frame) => {
        chrome.tabs.sendMessage(
          tab.id,
          { action: "skip-intro" },
          { frameId: frame.frameId },
          (response) => {
            if (chrome.runtime.lastError) return;
            if (response?.clicked) {
              console.log("[HSI] Skip confirmado no frame:", frame.frameId);
            }
          }
        );
      });
    });
  } else {
    // Prime / Netflix: injeta em todas as frames para pegar players aninhados (iframes)
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        func: triggerSkipOnly,
      });

      // Se resultado for um array, algum frame conseguiu dar skip?
      const skipped = results && Array.isArray(results) && results.some(res => res.result === true);

      if (!skipped) {
        console.log("[HSI] Nenhum botão de skip encontrado em nenhum frame. Executando Play/Pause.");
        await chrome.scripting.executeScript({
          target: { tabId: tab.id, allFrames: true },
          func: triggerPlayPause,
        });
      }
    } catch (err) {
      console.warn("[HSI] Erro:", err.message);
    }
  }
});

function triggerSkipOnly() {
  const host = window.location.hostname;
  const SELECTORS = {
    prime: [".skipelement", "button[data-testid='skip-button']", ".atvwebplayersdk-skipelement-button"],
    netflix: ["[data-uia='player-skip-intro']", "[data-uia='player-skip-recap']", ".watch-video--skip-content button"],
  };

  let selectors = [];
  if (host.includes("primevideo") || host.includes("amazon")) selectors = SELECTORS.prime;
  else if (host.includes("netflix")) selectors = SELECTORS.netflix;

  for (const sel of selectors) {
    const btn = document.querySelector(sel);
    if (btn && btn.offsetParent !== null) {
      console.log(`[HSI] Executando skip no seletor: ${sel}`);
      btn.click();
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
      return true; // Informa o background.js que o clique ocorreu
    }
  }
  return false;
}

function triggerPlayPause() {
  const video = document.querySelector("video");
  if (video) {
    video.paused ? video.play() : video.pause();
    return true; // Indica que achou um video e deu play/pause
  }
  return false;
}