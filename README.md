<div align="center">
  <img src="ollama-nextjs-ui.gif">
</div>

<h1 align="center">
  Vollständige & wunderschöne Web-Oberfläche für Ollama LLMs
</h1>

<div align="center">
  
![GitHub Repo stars](https://img.shields.io/github/stars/jakobhoeg/nextjs-ollama-llm-ui)
  
</div>


Starten Sie **schnell**, **lokal** und sogar **offline** mit großen Sprachmodellen. Dieses Projekt soll der einfachste Weg sein, um mit LLMs zu beginnen. Keine mühsamen und nervigen Setups erforderlich!

# Funktionen ✨

- **Schöne & intuitive Benutzeroberfläche:** Inspiriert von ChatGPT, um die Benutzererfahrung zu verbessern.
- **Vollständig lokal:** Speichert Chats im Localstorage für Bequemlichkeit. Keine Datenbank erforderlich.
- **Vollständig responsiv:** Nutzen Sie Ihr Handy zum Chatten, genauso bequem wie auf dem Desktop.
- **Einfache Einrichtung:** Keine mühsame und nervige Einrichtung erforderlich. Klonen Sie einfach das Repository und legen Sie los!
- **Code-Syntax-Hervorhebung:** Nachrichten, die Code enthalten, werden zur leichteren Lesbarkeit hervorgehoben.
- **Codeblöcke einfach kopieren:** Kopieren Sie die hervorgehobenen Codes mit nur einem Klick.
- **Modelle herunterladen/ziehen & löschen:** Laden Sie Modelle direkt über die Benutzeroberfläche herunter und löschen Sie sie.
- **Zwischen Modellen wechseln:** Wechseln Sie schnell zwischen Modellen mit einem Klick.
- **Chat-Verlauf:** Chats werden gespeichert und sind leicht zugänglich.
- **Hell- & Dunkelmodus:** Wechseln Sie zwischen Hell- und Dunkelmodus.

# Vorschau

https://github.com/jakobhoeg/nextjs-ollama-llm-ui/assets/114422072/08eaed4f-9deb-4e1b-b87a-ba17d81b9a02

# Anforderungen ⚙️

Um die Web-Oberfläche zu verwenden, müssen diese Anforderungen erfüllt sein:

1. Laden Sie [Ollama](https://ollama.com/download) herunter und führen Sie es aus. Alternativ können Sie es in einem Docker-Container ausführen. Überprüfen Sie die [Dokumentation](https://github.com/ollama/ollama) für Anweisungen.
2. Node.js (18+) und npm sind erforderlich. [Herunterladen](https://nodejs.org/en/download)

# Deployen Sie Ihre eigene Instanz mit einem Klick auf Vercel oder Netlify ✨

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjakobhoeg%2Fnextjs-ollama-llm-ui&env=NEXT_PUBLIC_OLLAMA_URL&envDescription=Your%20Ollama%20URL) [![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jakobhoeg/nextjs-ollama-llm-ui)

Sie müssen Ihre [OLLAMA_ORIGINS](https://github.com/ollama/ollama/blob/main/docs/faq.md) Umgebungsvariable auf dem Computer festlegen, auf dem Ollama läuft:

```
OLLAMA_ORIGINS="https://your-app.vercel.app/"
```

# Installation 📖

[![Packaging status](https://repology.org/badge/vertical-allrepos/nextjs-ollama-llm-ui.svg?columns=3)](https://repology.org/project/nextjs-ollama-llm-ui/versions)

Verwenden Sie ein vorgefertigtes Paket eines der unterstützten Paketmanager, um eine lokale Umgebung der Web-Oberfläche auszuführen. Alternativ können Sie auch aus dem Quellcode installieren, wie in den folgenden Anweisungen beschrieben.

> [!HINWEIS]  
> Wenn Ihre Frontend-Anwendung auf etwas anderem als `http://localhost` oder `http://127.0.0.1` läuft, müssen Sie die OLLAMA_ORIGINS auf Ihre Frontend-URL einstellen.
>
> Dies wird auch in der [Dokumentation](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server) angegeben:
> 
> `Ollama erlaubt standardmäßig Cross-Origin-Anfragen von 127.0.0.1 und 0.0.0.0. Weitere Ursprünge können mit OLLAMA_ORIGINS konfiguriert werden.`

## Installation aus dem Quellcode

**1. Klonen Sie das Repository in ein Verzeichnis auf Ihrem PC über die Eingabeaufforderung:**

```
git clone https://github.com/jakobhoeg/nextjs-ollama-llm-ui
```

**2. Wechseln Sie in das Verzeichnis:**

```
cd nextjs-ollama-llm-ui
```

**3. Benennen Sie die `.example.env` in `.env` um:**

```
mv .example.env .env
```

**4. Wenn Ihre Instanz von Ollama NICHT auf der Standard-IP-Adresse und dem Standardport läuft, ändern Sie die Variable in der .env-Datei, um Ihre Nutzung anzupassen:**

```
NEXT_PUBLIC_OLLAMA_URL="http://localhost:11434"
```

**5. Abhängigkeiten installieren:**

```
npm install
```

**6. Starten Sie den Entwicklungsserver:**

```
npm run dev

npm install && npm run dev

```

**7. Gehen Sie zu [localhost:3000](http://localhost:3000) und beginnen Sie, mit Ihrem bevorzugten Modell zu chatten!**

# Kommende Funktionen

Dies ist eine To-Do-Liste mit bevorstehenden Funktionen.
- ✅ Sprachsteuerung
- ✅ Code-Syntax-Hervorhebung
- ⬜️ Möglichkeit, ein Bild in der Eingabeaufforderung zu senden, um Vision-Sprachmodelle zu nutzen.
- ⬜️ Möglichkeit zur Regenerierung von Antworten
- ⬜️ Import und Export von Chats

# Technologiestack

[NextJS](https://nextjs.org/) - React Framework für das Web

[TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework

[shadcn-ui](https://ui.shadcn.com/) - UI-Komponente, die mit Radix UI und Tailwind CSS erstellt wurde

[shadcn-chat](https://github.com/jakobhoeg/shadcn-chat) - Chat-Komponenten für NextJS/React-Projekte

[Framer Motion](https://www.framer.com/motion/) - Bewegungs-/Animationsbibliothek für React

[Lucide Icons](https://lucide.dev/) - Icon-Bibliothek

# Nützliche Links

[Medium-Artikel](https://medium.com/@bartek.lewicz/launch-your-own-chatgpt-clone-for-free-on-colab-shareable-and-online-in-less-than-10-minutes-da19e44be5eb) - Wie man seinen eigenen ChatGPT-Klon kostenlos auf Google Colab startet. Von Bartek Lewicz.

[Lobehub-Erwähnung](https://lobehub.com/blog/5-ollama-web-ui-recommendation#5-next-js-ollama-llm-ui) - Fünf ausgezeichnete kostenlose Ollama WebUI-Client-Empfehlungen
```
