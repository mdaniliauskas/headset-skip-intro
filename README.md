# Headset Skip Intro 🎧

<div align="center">

[![Português](https://img.shields.io/badge/Português-🇧🇷-green?style=for-the-badge)](#) [![English](https://img.shields.io/badge/English-🇺🇸-blue?style=for-the-badge)](./README-EN.md)

![Banner](https://img.shields.io/badge/Chrome%20Extension-Automação%20de%20Mídia-informational?style=for-the-badge&logo=googlechrome&logoColor=white&color=0A66C2)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen?style=for-the-badge)

**Pule aberturas de séries usando apenas o botão do seu fone de ouvido!**

[![Desenvolvedor](https://img.shields.io/badge/Dev-Marcelo%20Daniliauskas-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mdaniliauskas)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdaniliauskas)

</div>

---

## 🚀 O Problema

Quando você está longe do teclado ou assistindo a uma série confortavelmente deitado, a abertura começa a tocar. Para pulá-la, normalmente você precisa se esticar para alcançar o mouse ou o teclado e clicar na tela.

## ✨ A Solução

**Headset Skip Intro** é uma extensão leve para o navegador que permite que você clique na tecla **Media Play/Pause** do seu fone de ouvido sem fio para pular facilmente aberturas ou recapitulações.

1. **Intercepta** o atalho global de mídia do seu fone de ouvido.
2. **Escaneia** a aba ativa na Amazon Prime Video ou Netflix procurando por botões de "Pular Abertura" ou "Skip Intro".
3. **Clica** no botão automaticamente caso ele esteja na tela.
4. **Reserva (Fallback)**: se nenhum botão for encontrado, a extensão faz o `Play` ou `Pause` do vídeo normalmente para não quebrar a utilidade do seu fone.

---

## 🛠️ Stack Tecnológica

<div align="left">

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Chrome](https://img.shields.io/badge/-Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

</div>

| Camada | Tecnologia |
|---|---|
| **Core logic** | Vanilla JavaScript (ES6+) |
| **Plataforma** | Chrome Extension Manifest V3 |
| **Permissões** | `activeTab`, `scripting` |
| **Background** | Service Workers |

---

## 📂 Estrutura do Projeto

```text
headset-skip-intro/
├── manifest.json       # Configuração da extensão (Manifest V3)
├── background.js       # Service worker para interceptar atalhos globais
├── content.js          # Script injetado para manipular a DOM da página
├── README.md           # Documentação em Português
└── README-EN.md        # Documentação em Inglês
```

---

## 🚀 Como Começar

### Pré-requisitos

- Google Chrome, Microsoft Edge, Brave ou qualquer navegador baseado em Chromium.

### Instalação (Modo de Desenvolvedor)

1. Clone ou baixe este repositório para o seu computador:
   ```bash
   git clone https://github.com/mdaniliauskas/headset-skip-intro.git
   ```
2. Abra seu navegador e navegue até a URL: `chrome://extensions/`.
3. Ative o **Modo do desenvolvedor** (basta ligar a chave no canto superior direito).
4. Clique em **Carregar sem compactação** (canto superior esquerdo).
5. Selecione a pasta `headset-skip-intro` que acabou de baixar.

### ⚙️ Configuração da Tecla Global (Importante)

Para garantir que a extensão funcione até mesmo quando o navegador estiver minimizado ou você estiver olhando pra outra janela (como do Discord ou jogo):
1. Volte na aba `chrome://extensions/shortcuts`.
2. Encontre a caixa do **"Headset Skip Intro"**.
3. Embaixo de "Pula a abertura ou faz o Play/Pause" (geralmente atribuído à tecla `MediaPlayPause`), altere a opção "No Chrome" (*In Chrome*) para **Global**.

---

## 💻 Como funciona por baixo dos panos

A extensão registra um comando de teclado customizado no `manifest.json`. O `background.js` escuta quando esse atalho é acionado pelo sistema operacional e envia uma mensagem para a aba ativa que está rodando a stream. O `content.js` lê essa mensagem e, ativamente, procura por certos seletores CSS pré-definidos na tela (ex: `.skipElement`, `[data-uia="player-skip-intro"]`). Se encontrar, clica. Se não os encontrar, ele procura por botões contendo textos chaves (como "skip", "pular"). Por último, ele localiza o elemento `<video>` da página e dá `play()` ou `pause()`.

---

<div align="center">

*Headset Skip Intro — Suas maratonas, sem interrupções.* 🍿

**Transformando ideias em soluções tecnológicas robustas e escaláveis**

</div>
