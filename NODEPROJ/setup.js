const fs = require('fs');
const path = require('path');

// Funktion zum Erstellen eines Verzeichnisses, falls es nicht existiert
function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Funktion zum Erstellen einer Datei mit Inhalt
function createFile(filePath, content) {
    fs.writeFileSync(filePath, content, { encoding: 'utf8', flag: 'w' });
}

// Verzeichnisstruktur erstellen
const baseDir = path.join(__dirname, 'express_app');
createDirectory(baseDir);
createDirectory(path.join(baseDir, 'static'));
createDirectory(path.join(baseDir, 'views'));

// Dateien erstellen und mit Inhalt füllen

// styles.css
createFile(
    path.join(baseDir, 'static', 'styles.css'),
    `/* Grundlegendes CSS-Stylesheet */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
}
`
);

// scripts.js
createFile(
    path.join(baseDir, 'static', 'scripts.js'),
    `// Grundlegendes JavaScript
console.log('JavaScript funktioniert!');
`
);

// index.ejs
createFile(
    path.join(baseDir, 'views', 'index.ejs'),
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompt Manager</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <h1>Prompt Manager</h1>
    <ul id="prompts-list">
        <% prompts.forEach(prompt => { %>
            <li><%= prompt.cmd %> - <%= prompt.prompt %></li>
        <% }); %>
    </ul>
    <a href="/chat">Start Chat</a>
    <script src="/scripts.js"></script>
</body>
</html>
`
);

// chat.ejs
createFile(
    path.join(baseDir, 'views', 'chat.ejs'),
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Interface</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <h1>Chat Interface</h1>
    <div id="chat-container">
        <div id="messages"></div>
        <input type="text" id="user-input" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
    </div>
    <script>
        async function sendMessage() {
            const input = document.getElementById('user-input').value;
            const response = await fetch('/api/llm-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();
            document.getElementById('messages').innerHTML += \`<p>User: \${input}</p>\`;
            document.getElementById('messages').innerHTML += \`<p>Bot: \${data.response}</p>\`;
        }
    </script>
</body>
</html>
`
);

// user_custom.json
createFile(
    path.join(baseDir, 'user_custom.json'),
    JSON.stringify([
        {
            "cmd": "example_command",
            "act": "example_action",
            "prompt": "example_prompt_text",
            "enable": true,
            "tags": ["tag1", "tag2"]
        }
    ], null, 2)
);

// app.js
createFile(
    path.join(baseDir, 'app.js'),
    `const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('static'));
app.set('view engine', 'ejs');

// Laden der JSON-Datei
let prompts = require('./user_custom.json');

// Routen
app.get('/', (req, res) => {
    res.render('index', { prompts });
});

app.get('/prompts', (req, res) => {
    res.json(prompts);
});

app.post('/prompts', (req, res) => {
    const newPrompt = req.body;
    prompts.push(newPrompt);
    savePrompts();
    res.status(201).json(newPrompt);
});

app.put('/prompts/:cmd', (req, res) => {
    const cmd = req.params.cmd;
    const updatedPrompt = req.body;
    let promptIndex = prompts.findIndex(p => p.cmd === cmd);

    if (promptIndex !== -1) {
        prompts[promptIndex] = updatedPrompt;
        savePrompts();
        res.json(updatedPrompt);
    } else {
        res.status(404).send('Prompt not found');
    }
});

app.delete('/prompts/:cmd', (req, res) => {
    const cmd = req.params.cmd;
    const promptIndex = prompts.findIndex(p => p.cmd === cmd);

    if (promptIndex !== -1) {
        prompts.splice(promptIndex, 1);
        savePrompts();
        res.status(204).send();
    } else {
        res.status(404).send('Prompt not found');
    }
});

app.post('/api/llm-chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const llmResponse = await axios.post('OLLAMA_API_ENDPOINT', {
            prompt: userMessage,
        });
        res.json({ response: llmResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with LLM');
    }
});

function savePrompts() {
    fs.writeFileSync('./user_custom.json', JSON.stringify(prompts, null, 2));
}

app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
`
);

// package.json
createFile(
    path.join(baseDir, 'package.json'),
    `{
  "name": "express_app",
  "version": "1.0.0",
  "description": "Prompt Manager with LLM Integration",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1"
  }
}`
);

console.log('Projektstruktur und Dateien erfolgreich erstellt!');
