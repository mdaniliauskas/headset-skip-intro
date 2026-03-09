chrome.commands.onCommand.addListener((command) => {
  if (command === "skip-intro-or-play") {
    // Tenta mandar a mensagem para a aba ativa na janela atual
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "handleMediaPlayPause" }).catch(err => {
          console.log("[Skip Intro Extension]: Aba não habilitada ou erro ao enviar mensagem:", err);
        });
      }
    });
  }
});
