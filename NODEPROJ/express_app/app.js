const express = require('express');
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

// Hilfsfunktion zum Speichern der Prompts
function savePrompts() {
    fs.writeFileSync('./user_custom.json', JSON.stringify(prompts, null, 2));
}

// Routen
app.get('/', (req, res) => {
    res.render('index', { prompts });
});

app.get('/prompts', (req, res) => {
    res.json(prompts);
});

app.post('/prompts', (req, res) => {
    const newPrompt = req.body;
    if (!newPrompt.cmd || !newPrompt.act || !newPrompt.prompt) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    prompts.push(newPrompt);
    savePrompts();
    res.status(201).json(newPrompt);
});

app.put('/prompts/:cmd', (req, res) => {
    const cmd = req.params.cmd;
    const updatedPrompt = req.body;
    let promptIndex = prompts.findIndex(p => p.cmd === cmd);

    if (promptIndex !== -1) {
        prompts[promptIndex] = { ...prompts[promptIndex], ...updatedPrompt };
        savePrompts();
        res.json(updatedPrompt);
    } else {
        res.status(404).json({ error: 'Prompt not found' });
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
        res.status(404).json({ error: 'Prompt not found' });
    }
});

app.post('/api/llm-chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const llmResponse = await axios.post('OLLAMA_API_ENDPOINT', {
            prompt: userMessage,
        });

        res.json({ response: llmResponse.data });
    } catch (error) {
        console.error('Error communicating with LLM:', error);
        res.status(500).json({ error: 'Error communicating with LLM' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
