# Headset Skip Intro 🎧 v2.0

Skip TV show intros on **Crunchyroll**, **Prime Video**, and **Netflix** using just the **MediaPlayPause** button on your Bluetooth headset.

---

## 🆕 What's new in v2.0

| | v1.0 | v2.0 |
|---|---|---|
| Crunchyroll | ❌ Did not work | ✅ Correct selectors added |
| Architecture | `content.js` handled everything | `background.js` injects and executes the skip |
| Visibility tracking | Did not check | Checks `offsetParent` (visible element) |
| Fallback Play/Pause | Yes | Yes |
| Diagnostic logs | Basic | Detailed by selector |

---

## 🚀 Installation

1. Clone or download this repository
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click on **Load unpacked** and select this folder

### ⚙️ Global shortcut configuration (important!)

1. Go to `chrome://extensions/shortcuts`
2. Find the **"Headset Skip Intro"** box
3. Change **"In Chrome"** to **Global** on the "Pula a abertura ou faz Play/Pause" option.

---

## 🔍 How to debug if it doesn't work

Open your page's DevTools (F12 > Console) and look for `[Headset Skip Intro]` messages.

If you see `🔍 Botão de skip visível` but the click didn't go through, please open an **Issue** with the selector that appeared in the log.

---

## 🛠 Stack

- Vanilla JavaScript (ES6+)
- Chrome Extension Manifest V3
- Minimum permissions: `activeTab`, `scripting`

---

*Headset Skip Intro — Your binges, uninterrupted.* 🍿
