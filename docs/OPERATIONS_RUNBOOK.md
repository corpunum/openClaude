# Operations Runbook

## Start
`npm start`

Default bind: `127.0.0.1:18883`

## Service
`./scripts/install-systemd.sh`

## Tests
- `npm test`
- `npm run e2e`

## Runtime State
- `~/.openclaude/config.json`
- `~/.openclaude/data/*`
- `~/.openclaude/logs/*`

## Health Checks
- `curl -sS http://127.0.0.1:18883/api/health`
- `curl -sS http://127.0.0.1:18883/api/model-catalog`
- `curl -sS http://127.0.0.1:18883/api/capabilities`
