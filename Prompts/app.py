from flask import Flask, jsonify, request, render_template, redirect, url_for
import json
import os
import markdown2

app = Flask(__name__)

# Pfad zur JSON-Datei
json_file_path = os.path.join(os.path.dirname(__file__), 'user_custom.json')

# Pfad zum Markdown-Verzeichnis
md_directory = r'A:\EinfachGPTROMPTS\GPTLISTE\gpts'

# JSON-Datei laden
with open(json_file_path, 'r', encoding='utf-8') as file:
    prompts_json = json.load(file)

@app.route('/')
def index():
    return render_template('index.html', prompts=prompts_json)

@app.route('/prompts/<string:cmd>', methods=['GET'])
def get_prompt(cmd):
    prompt = next((p for p in prompts_json if p['cmd'] == cmd), None)
    return jsonify(prompt)

@app.route('/prompts', methods=['POST'])
def add_prompt():
    new_prompt = request.json
    prompts_json.append(new_prompt)
    with open(json_file_path, 'w', encoding='utf-8') as file:
        json.dump(prompts_json, file, indent=4, ensure_ascii=False)
    return jsonify(new_prompt), 201

@app.route('/prompts/<string:cmd>', methods=['PUT'])
def update_prompt(cmd):
    updated_prompt = request.json
    for i, prompt in enumerate(prompts_json):
        if prompt['cmd'] == cmd:
            prompts_json[i] = updated_prompt
            break
    with open(json_file_path, 'w', encoding='utf-8') as file:
        json.dump(prompts_json, file, indent=4, ensure_ascii=False)
    return jsonify(updated_prompt)

@app.route('/prompts/<string:cmd>', methods=['DELETE'])
def delete_prompt(cmd):
    global prompts_json
    prompts_json = [prompt for prompt in prompts_json if prompt['cmd'] != cmd]
    with open(json_file_path, 'w', encoding='utf-8') as file:
        json.dump(prompts_json, file, indent=4, ensure_ascii=False)
    return '', 204

@app.route('/chat')
def chat():
    return render_template('chat.html')

# Route zum Anzeigen von Markdown-Dateien
@app.route('/markdown')
def list_markdown():
    files = [f for f in os.listdir(md_directory) if f.endswith('.md')]
    return render_template('markdown_list.html', files=files)

# Route zum Bearbeiten einer Markdown-Datei
@app.route('/markdown/edit/<filename>', methods=['GET', 'POST'])
def edit_markdown(filename):
    file_path = os.path.join(md_directory, filename)
    if request.method == 'POST':
        # Speichere die bearbeitete Datei
        new_content = request.form['content']
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        return redirect(url_for('list_markdown'))
    
    # Laden der Datei und anzeigen
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        return render_template('markdown_edit.html', filename=filename, content=content)
    else:
        return redirect(url_for('list_markdown'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
