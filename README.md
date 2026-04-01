# openClaude

Autonomous general assistant with Web UI.

## Runtime Isolation
- App home: `~/.openclaude`
- Config: `~/.openclaude/config.json`
- Sessions: `~/.openclaude/data/sessions`
- Memory DB: `~/.openclaude/data/memory.db`

## Providers
- Ollama local/cloud
- OpenRouter
- NVIDIA NIM
- OpenAI

## Start
```bash
npm install
npm start
```
UI: `http://127.0.0.1:18883`

## Test
```bash
npm test
npm run e2e:webui
```
