# Headset Skip Intro 🎧 v2.0

Pule aberturas de séries no **Crunchyroll**, **Prime Video** e **Netflix** usando apenas o botão **MediaPlayPause** do seu fone Bluetooth.

---

## 🆕 O que mudou na v2.0

| | v1.0 | v2.0 |
|---|---|---|
| Crunchyroll | ❌ Não funcionava | ✅ Seletores corretos adicionados |
| Arquitetura | `content.js` fazia tudo | `background.js` injeta e executa o skip |
| Detecção de visibilidade | Não verificava | Verifica `offsetParent` (elemento visível) |
| Fallback Play/Pause | Sim | Sim |
| Logs de diagnóstico | Básico | Detalhado por seletor |

---

## 🚀 Instalação

1. Clone ou baixe este repositório
2. Abra `chrome://extensions`
3. Ative o **Modo do desenvolvedor**
4. Clique em **Carregar sem compactação** e selecione esta pasta

### ⚙️ Configuração da tecla global (importante!)

1. Acesse `chrome://extensions/shortcuts`
2. Encontre **"Headset Skip Intro"**
3. Troque **"No Chrome"** para **Global** na opção "Pula a abertura ou faz Play/Pause"

---

## 🔍 Como debugar se não funcionar

Abra o DevTools da página (F12 > Console) e procure por mensagens `[Headset Skip Intro]`.

Se aparecer `🔍 Botão de skip visível` mas o clique não acontecer, abra uma **Issue** com o seletor que apareceu no log.

---

## 🛠 Stack

- Vanilla JavaScript (ES6+)
- Chrome Extension Manifest V3
- Permissões mínimas: `activeTab`, `scripting`

---

*Headset Skip Intro — Suas maratonas, sem interrupções.* 🍿
