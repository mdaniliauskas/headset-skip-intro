chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "handleMediaPlayPause") {

        // Lista de seletores mapeados para os serviços de streaming mais famosos
        const skipSelectors = [
            // Amazon Prime Video
            '.atvwebplayersdk-skipelement-button',
            '[class*="skipElement"]',

            // Netflix
            'button[data-uia="player-skip-intro"]',
            'button[data-uia="player-skip-recap"]',
            'button[data-uia="next-episode-seamless-button"]',

            // Padrões Genéricos
            '.skip-button',
            '.button-skip'
        ];

        let clicked = false;

        for (const selector of skipSelectors) {
            const buttons = document.querySelectorAll(selector);
            for (const btn of buttons) {
                // Verifica se o elemento existe na arvore e está visível pro usuário
                if (btn && btn.offsetParent !== null) {
                    btn.click();
                    clicked = true;
                    console.log("[Skip Intro Extension]: Clicado no botão de pular ->", selector);
                    sendResponse({ status: "clicked" });
                    return true; // Finaliza pois já achamos o botão
                }
            }
        }

        // Estratégia reserva: procurar botões na tela pelo texto e clicar neles
        if (!clicked) {
            const allButtons = document.querySelectorAll('button, div[role="button"]');
            const skipTexts = ['pular abertura', 'skip intro', 'pular recapitulação', 'skip recap', 'pular', 'skip']; // minúsculo pra comparação

            for (const btn of allButtons) {
                if (btn.offsetParent !== null && btn.innerText) {
                    const text = btn.innerText.trim().toLowerCase();
                    // Se o botão contiver qualquer uma dessas palavras chave
                    if (skipTexts.some(t => text.includes(t))) {
                        btn.click();
                        clicked = true;
                        console.log("[Skip Intro Extension]: Clicado no botão pelo texto ->", text);
                        sendResponse({ status: "clicked" });
                        return true;
                    }
                }
            }
        }

        // Se NÃO achou nenhum botão de pular abertura ativo, nós repassamos a instrução original
        // Isso é super importante, caso contrário o fone iria quebrar e parar de pausar vídeos em geral
        if (!clicked) {
            const videos = document.querySelectorAll('video');
            for (const video of videos) {
                // Verifica se o player do vídeo já carregou alguma coisa
                if (video.readyState > 0) {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                    console.log("[Skip Intro Extension]: Feito Play/Pause padrão do vídeo.");
                    sendResponse({ status: "play_pause_toggled" });
                    return true;
                }
            }
        }
    }
});
