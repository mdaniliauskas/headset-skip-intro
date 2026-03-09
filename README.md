# Headset Skip Intro 🎧 v2.0

<div align="center">

[![Português](https://img.shields.io/badge/Português-🇧🇷-green?style=for-the-badge)](#) [![English](https://img.shields.io/badge/English-🇺🇸-blue?style=for-the-badge)](./README-EN.md)

![Project Banner](https://img.shields.io/badge/Crunchyroll--Netflix--Prime%20Video-Skip%20Intro-informational?style=for-the-badge&logo=googlechrome&logoColor=white&color=0A66C2)
![Status](https://img.shields.io/badge/Status-Estável-brightgreen?style=for-the-badge)

**Pule aberturas com um toque no seu fone Bluetooth**
🎯 **Produtividade máxima para suas maratonas de animes e séries**

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdaniliauskas)
[![Email](https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marcelo.daniliauskas@gmail.com)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mdaniliauskas)

</div>

---

## 🚀 Sobre o Projeto

O **Headset Skip Intro** é uma extensão para Chrome projetada para quem ama maratonar mas odeia perder tempo com aberturas repetitivas. Integrando-se diretamente com o botão de **MediaPlayPause** (comum em fones Bluetooth), ela permite pular intros no **Crunchyroll**, **Prime Video** e **Netflix** com um toque, sem precisar alcançar o mouse.

### 🆕 O que mudou na v2.0
- **Pulo Manual via Fone Bluetooth:** Você no controle. Pule a abertura intencionalmente quando quiser, sem "auto-skip forçado" pulando cenas importantes por engano.
- **Poder em Segundo Plano (Background Power):** Funcionamento garantido mesmo fora da janela ativa! Esteja jogando, trabalhando em outra tela ou com o Chrome minimizado: apertou no fone, a abertura pula na hora.
- **Suporte Total ao Crunchyroll:** Seletores otimizados e controle direto da API de vídeo para o player moderno.
- **Arquitetura Extreme Performance:** Migração para Manifest V3 sem monitoramento constante de tela (0% de CPU e bateria em repouso).
- **Fallback Automático:** Se não houver intro visível, joga inteligente e funciona como Play/Pause normal do seu fone, em qualquer aba inativa!

---

## 🛠️ Stack Tecnológica

<div align="left">

![JavaScript](https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## ⚙️ Instalação e Configuração

### 1️⃣ Instalação Manual
1. Clone ou baixe este repositório.
2. Abra `chrome://extensions` no seu navegador.
3. Ative o **Modo do desenvolvedor** (canto superior direito).
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto.

### 2️⃣ Configuração do Atalho Global (Obrigatório)
Para que o botão do fone funcione mesmo com o Chrome em segundo plano:
1. Acesse `chrome://extensions/shortcuts`.
2. Encontre o **Headset Skip Intro**.
3. Na opção "Pula a abertura ou faz Play/Pause", mude o seletor de **No Chrome** para **Global**.

---

## 🔍 Diagnóstico e Debug

Se a extensão não estiver pulando conforme o esperado:
1. Abra o **Console do DevTools** (F12) na página da maratona.
2. Procure por logs com o prefixo `[Headset Skip Intro]`.
3. Se o log disser `🔍 Botão de skip visível` mas nada acontecer, abra uma **Issue** informando o seletor exibido.

---

## 🤝 Contribua

Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests** com novos seletores para outras plataformas de streaming!

---

<div align="center">

**"Transformando suas maratonas em experiências contínuas"**

![Profile Views](https://komarev.com/ghpvc/?username=mdaniliauskas-skipintro&color=0A66C2&style=for-the-badge)

</div>
