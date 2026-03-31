/**
 * openClaude - Autonomous General Assistant
 * Entry point - starts agent and UI server
 */

import { Agent } from './core/agent.js';
import { UIServer } from './ui/server.js';

async function main() {
  console.log('[openClaude] Starting...');
  
  // Initialize agent
  const agent = new Agent();
  await agent.initialize();
  
  // Start UI server
  const server = new UIServer(agent, 18883);
  await server.start();
  
  console.log('[openClaude] Ready at http://127.0.0.1:18883');
}

main().catch(console.error);
