# Headset Skip Intro 🎧

<div align="center">

[![Português](https://img.shields.io/badge/Português-🇧🇷-green?style=for-the-badge)](./README.md) [![English](https://img.shields.io/badge/English-🇺🇸-blue?style=for-the-badge)](#)

![Banner](https://img.shields.io/badge/Chrome%20Extension-Media%20Automation-informational?style=for-the-badge&logo=googlechrome&logoColor=white&color=0A66C2)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen?style=for-the-badge)

**Skip TV show intros using just the button on your wireless headset!**

[![Developer](https://img.shields.io/badge/Dev-Marcelo%20Daniliauskas-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mdaniliauskas)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdaniliauskas)

</div>

---

## 🚀 The Problem

When you are far from the keyboard or comfortably lying down watching a series, the opening intro starts playing. To skip it, you normally have to stretch to reach for your mouse or keyboard and click the screen.

## ✨ The Solution

**Headset Skip Intro** is a lightweight browser extension that lets you click the **Media Play/Pause** button on your wireless headset to seamlessly skip intros or recaps.

1. **Intercepts** the global media shortcut from your headset.
2. **Scans** the active tab on Amazon Prime Video or Netflix looking for "Skip Intro" buttons.
3. **Clicks** the button automatically if it's on the screen.
4. **Fallback**: if no skip button is found, the extension toggles `Play` or `Pause` on the video as normal, so your headset doesn't lose its basic utility.

---

## 🛠️ Tech Stack

<div align="left">

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Chrome](https://img.shields.io/badge/-Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

</div>

| Layer | Technology |
|---|---|
| **Core logic** | Vanilla JavaScript (ES6+) |
| **Platform** | Chrome Extension Manifest V3 |
| **Permissions** | `activeTab`, `scripting` |
| **Background** | Service Workers |

---

## 📂 Project Structure

```text
headset-skip-intro/
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Service worker to intercept media keys
├── content.js          # Injected script to manipulate page DOM
├── README.md           # Portuguese documentation
└── README-EN.md        # English documentation
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
2. Open your browser and navigate to the URL: `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch on the top right corner).
4. Click on **Load unpacked** (top left).
5. Select the `headset-skip-intro` directory you just downloaded.

### ⚙️ Global Shortcut Configuration (Important)

To ensure the extension works even when the browser is minimized or you are looking at another window (like Discord or a game):
1. Go to the `chrome://extensions/shortcuts` tab.
2. Find the **"Headset Skip Intro"** box.
3. Under the "Pula a abertura ou faz o Play/Pause" shortcut (usually assigned to the `MediaPlayPause` key), change the dropdown from *In Chrome* to **Global**.

---

## 💻 How it Works under the hood

The extension registers a custom keyboard command in `manifest.json`. The `background.js` listens for when this shortcut gets triggered by the operational system and sends a message to the active tab carrying the stream. The `content.js` reads this message and actively scans for certain pre-defined CSS selectors on the screen (e.g., `.skipElement`, `[data-uia="player-skip-intro"]`). If found, it gets clicked. If not, it searches for buttons containing key text (like "skip" or "pular"). Lastly, as a fallback, it targets the page's `<video>` element and toggles `play()` or `pause()`.

---

<div align="center">

*Headset Skip Intro — Your binges, uninterrupted.* 🍿

**Transforming ideas into robust and scalable tech solutions**

</div>
