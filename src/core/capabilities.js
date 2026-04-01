export function getCapabilities(config) {
  return {
    contract_version: '2026-04-01.webui-capabilities.v1',
    app_id: 'openclaude',
    app_name: 'openClaude',
    menu: ['chat', 'missions', 'trace', 'runtime', 'settings'],
    quick_prompts: [
      'Run a structured architecture review and list weak assumptions.',
      'Design a mission plan and execute first implementation step.',
      'Produce test-first fixes for the top two stability issues.',
      'Audit provider routing behavior under degraded upstream conditions.',
    ],
    features: {
      chat: true,
      sessions: true,
      missions: true,
      trace: true,
      model_catalog: true,
      provider_health: true,
      self_heal: true,
      browser_control: true,
      git_runtime: true,
      workspace_guardrails: true,
      reasoning_focus: true,
      memory_inspection: false,
      research: false,
    },
    ui: {
      shell: 'shared-autonomy-v1',
      chat_style: 'imessage',
      skin: 'claude-sand',
    },
    runtime: {
      host: config.host,
      port: config.port,
      home: config.home,
      workspace_root: config.workspaceRoot,
    },
  };
}
