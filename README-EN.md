# Headset Skip Intro 🎧 v2.0

<div align="center">

[![English](https://img.shields.io/badge/English-🇺🇸-blue?style=for-the-badge)](#) [![Português](https://img.shields.io/badge/Português-🇧🇷-green?style=for-the-badge)](./README.md)

![Project Banner](https://img.shields.io/badge/Crunchyroll--Netflix--Prime%20Video-Skip%20Intro-informational?style=for-the-badge&logo=googlechrome&logoColor=white&color=0A66C2)
![Status](https://img.shields.io/badge/Status-Stable-brightgreen?style=for-the-badge)

**Skip intros with a single tap on your Bluetooth headset**
🎯 **Maximum productivity for your anime and TV show binges**

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdaniliauskas)
[![Email](https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marcelo.daniliauskas@gmail.com)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mdaniliauskas)

</div>

---

## 🚀 About the Project

**Headset Skip Intro** is a Chrome extension designed for binge-watchers who hate losing time with repetitive openings. By integrating directly with the **MediaPlayPause** button (common on Bluetooth headsets), it lets you skip intros on **Crunchyroll**, **Prime Video**, and **Netflix** without ever touching your mouse.

### 🆕 What's New in v2.0
- **Manual Skip via Bluetooth Headset:** You are in control. Intentionally skip the intro when YOU want, with no "forced auto-skip" accidentally jumping over important prologue scenes.
- **Background Power:** Guaranteed functionality even outside the active window! Whether you're gaming, working on another screen, or with Chrome minimized: press the headset button, and the intro skips instantly.
- **Full Crunchyroll Support:** Optimized selectors and direct video API control for the modern web player.
- **Extreme Performance Architecture:** Migration to Manifest V3 with zero background screen monitoring (0% idle CPU and battery drain).
- **Auto Fallback:** If no intro is visible, it plays smart and functions as a normal Play/Pause for your headset, even on inactive tabs!

---

## 🛠️ Tech Stack

<div align="left">

![JavaScript](https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## ⚙️ Installation and Configuration

### 1️⃣ Manual Installation
1. Clone or download this repository.
2. Open `chrome://extensions` in your browser.
3. Enable **Developer Mode** (top right corner).
4. Click **Load Unpacked** and select the project folder.

### 2️⃣ Global Shortcut Setup (Mandatory)
For the headset button to work even when Chrome is in the background:
1. Go to `chrome://extensions/shortcuts`.
2. Find **Headset Skip Intro**.
3. Under "Pula a abertura ou faz Play/Pause", change the setting from **In Chrome** to **Global**.

---

## 🔍 Diagnosis and Debugging

If the extension isn't skipping as expected:
1. Open the **DevTools Console** (F12) on the streaming page.
2. Look for logs prefixed with `[Headset Skip Intro]`.
3. If the log says `🔍 Botão de skip visível` but nothing happens, please open an **Issue** with the displayed selector.

---

## 🤝 Contribute

Feel free to open **Issues** or submit **Pull Requests** with new selectors for other streaming platforms!

---

<div align="center">

**"Turning your binges into seamless experiences"**

![Profile Views](https://komarev.com/ghpvc/?username=mdaniliauskas-skipintro&color=0A66C2&style=for-the-badge)

</div>
