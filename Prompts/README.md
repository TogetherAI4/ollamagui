

```markdown
# Prompt Manager Flask App

Diese Flask-basierte Webanwendung dient zur Verwaltung und Bearbeitung von Prompts, die in einer JSON-Datei gespeichert sind. Die Anwendung ermöglicht das Anzeigen, Hinzufügen, Bearbeiten und Löschen von Prompts über eine benutzerfreundliche Oberfläche und eine REST-API.

## Projektstruktur

```
flask_app/
│
├── static/
│   ├── styles.css            # Statische CSS-Datei für das Styling
│   └── scripts.js            # Statische JavaScript-Datei für die Interaktivität
│
├── templates/
│   ├── index.html            # Hauptseite der App mit dem Prompt Manager
│   └── chat.html             # Platzhalterseite für eine Chat-Funktion
│
├── user_custom.json          # JSON-Datei mit den Prompts
├── app.py                    # Hauptanwendung in Flask
├── requirements.txt          # Python-Abhängigkeiten
└── README.md                 # Dieses README-Dokument
```

## Voraussetzungen

- **Python 3.x**: Stelle sicher, dass Python 3.x installiert ist.
- **Virtuelle Umgebung**: Es wird empfohlen, eine virtuelle Umgebung für die Installation der Abhängigkeiten zu verwenden.

## Installation

1. **Repository klonen oder herunterladen**:
   ```bash
   git clone <REPOSITORY_URL>
   cd flask_app
   ```

2. **Virtuelle Umgebung erstellen**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Auf Windows: venv\Scripts\activate
   ```

3. **Abhängigkeiten installieren**:
   ```bash
   pip install -r requirements.txt
   ```

## Anwendung starten

1. **Flask-App starten**:
   ```bash
   python app.py
   ```

2. **App im Browser öffnen**:
   Gehe zu `http://localhost:5000` in deinem Webbrowser, um die App zu verwenden.

## API-Endpunkte

Die App stellt eine REST-API zur Verfügung, um die Prompts zu verwalten:

- `GET /prompts`  
  Gibt eine Liste aller Prompts zurück.

- `POST /prompts`  
  Fügt einen neuen Prompt hinzu. Erfordert JSON-Daten im Body. Beispiel:
  ```json
  {
    "cmd": "example_command",
    "act": "example_action",
    "prompt": "example_prompt_text",
    "enable": true,
    "tags": ["tag1", "tag2"]
  }
  ```

- `PUT /prompts/<cmd>`  
  Aktualisiert einen bestehenden Prompt basierend auf dem `cmd`-Wert. Erfordert JSON-Daten im Body.

- `DELETE /prompts/<cmd>`  
  Löscht einen Prompt basierend auf dem `cmd`-Wert.

## Anpassung der JSON-Datei

Die Datei `user_custom.json` enthält die Prompts und kann manuell oder über die Anwendung angepasst werden. Die Struktur jedes Prompts sieht wie folgt aus:

```json
{
  "cmd": "example_command",
  "act": "example_action",
  "prompt": "example_prompt_text",
  "enable": true,
  "tags": ["tag1", "tag2"]
}
```

- **cmd**: Ein eindeutiger Bezeichner für den Prompt.
- **act**: Die Aktion oder der Zweck des Prompts.
- **prompt**: Der Text des Prompts.
- **enable**: Ein boolescher Wert, der angibt, ob der Prompt aktiviert ist.
- **tags**: Eine Liste von Tags zur Kategorisierung des Prompts.

## Anpassung des Frontends

Die HTML-, CSS- und JavaScript-Dateien im `templates`- und `static`-Ordner können nach Belieben angepasst werden, um das Frontend-Design und die Funktionalität zu erweitern. 

- **index.html**: Die Hauptseite, auf der Prompts angezeigt und verwaltet werden.
- **chat.html**: Eine Platzhalterseite für eine mögliche Chat-Funktion.

**Hinweis**: Änderungen an den Frontend-Dateien können ein erneutes Laden der Seite im Browser erfordern, um die Änderungen sichtbar zu machen.

## Lizenz

Dieses Projekt ist unter der [MIT Lizenz](LICENSE) lizenziert.

## Beitragende

Falls du zu diesem Projekt beitragen möchtest, eröffne bitte ein Issue oder einen Pull-Request im [Repository](<REPOSITORY_URL>).

## Kontakt

Für Fragen oder Feedback kannst du mich unter [deine E-Mail-Adresse] erreichen.

```

