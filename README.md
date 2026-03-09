# Headset Skip Intro 🎧

> **Pule aberturas de séries usando apenas o botão do seu fone de ouvido!**

A simple and smart Chrome Extension that intercepts your headset's `Play/Pause` media key to automatically click "Skip Intro" or "Skip Recap" buttons on major streaming platforms (Amazon Prime Video & Netflix). If no skip button is found, it falls back to standard play/pause functionality.

---

## 🎯 The Problem

When you are far from the keyboard or comfortably watching a series, the opening intro starts playing. To skip it, you normally have to reach for your mouse or keyboard.

## ✨ The Solution

**Headset Skip Intro** is a lightweight extension that allows you to click the **Media Play/Pause** button on your wireless headset to seamlessly skip intros and recaps.

1. **Intercepts** the global media shortcut from your headset.
2. **Scans** the active tab for known "Skip Intro" selectors.
3. **Clicks** the button automatically if found.
4. **Falls back** and plays/pauses the video if no skip button is on screen.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Core** | Vanilla JavaScript (ES6+) |
| **Platform** | Chrome Extension Manifest V3 |
| **Permissions** | `activeTab`, `scripting` |
| **Background** | Service Workers |

---

## 📂 Project Structure

```text
headset-skip-intro/
├── manifest.json       # Configuração da extensão (Manifest V3)
├── background.js       # Service worker para interceptar atalhos globais
├── content.js          # Script injetado para manipular a DOM da página
└── README.md           # Documentação do projeto
```

---

## 🚀 Getting Started

### Prerequisites

- Google Chrome, Microsoft Edge, Brave or any Chromium-based browser.

### Installation (Developer Mode)

1. Clone or download this repository to your local machine:
   ```bash
   git clone https://github.com/mdaniliauskas/headset-skip-intro.git
   ```
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch on the top right).
4. Click on **Load unpacked** (top left).
5. Select the `headset-skip-intro` directory.

### ⚙️ Global Shortcut Configuration

To ensure the extension works even when the browser is minimized or you are in another app:
1. Go to `chrome://extensions/shortcuts` in your browser.
2. Find **"Headset Skip Intro"**.
3. Under the "Pula a abertura ou faz o Play/Pause" shortcut (usually set to `MediaPlayPause`), change the scope from **In Chrome** to **Global**.

---

## 💻 How it Works under the hood

The extension registers a command in `manifest.json`. The `background.js` listens to this command and sends a message to the active tab. The `content.js` looks for specific CSS selectors (`.skipElement`, `[data-uia="player-skip-intro"]`, etc.) and clicks them. If none are found, it searches for buttons containing texts like "skip", "pular", etc. As a last resort, it triggers `play()` or `pause()` on the closest `<video>` element, ensuring you don't lose the original functionality of your headset.

---

*Headset Skip Intro — Suas maratonas, sem interrupções.* 🍿
