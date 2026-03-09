// background.js — Service Worker (Manifest V3)

chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "skip-intro") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  const isCrunchyroll = tab.url?.includes("crunchyroll.com");

  chrome.webNavigation.getAllFrames({ tabId: tab.id }, (frames) => {
    if (!frames) return;
    frames.forEach((frame) => {
      chrome.tabs.sendMessage(
        tab.id,
        { action: "skip-intro" },
        { frameId: frame.frameId },
        (response) => {
          if (chrome.runtime.lastError) return; // ignora erros de comunicação
          if (response?.clicked) {
            console.log("[HSI] Skip executado no frame:", frame.frameId);
          }
        }
      );
    });
  });
});