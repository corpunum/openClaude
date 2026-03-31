/**
 * Research Tool
 * Auto-approved: web search, content analysis
 */

import { chromium } from 'playwright';

let browser = null;

export async function execute(args) {
  const { action, query, url, timeout = 30000 } = args;
  
  try {
    if (!browser) {
      browser = await chromium.launch({ headless: true });
    }
    
    const context = await browser.newContext();
    const page = await context.newPage();
    
    try {
      switch (action) {
        case 'search':
          // DuckDuckGo search
          await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, { 
            waitUntil: 'networkidle', 
            timeout 
          });
          
          // Extract search results
          const results = await page.evaluate(() => {
            const items = document.querySelectorAll('[data-layout="organic"]');
            return Array.from(items).slice(0, 10).map(item => ({
              title: item.querySelector('h2')?.textContent || '',
              url: item.querySelector('a')?.href || '',
              snippet: item.querySelector('[data-testid="result-snippet"]')?.textContent || ''
            }));
          });
          
          return { success: true, results };
        
        case 'fetch':
          await page.goto(url, { waitUntil: 'networkidle', timeout });
          const content = await page.content();
          return { success: true, content };
        
        case 'extract':
          await page.goto(url, { waitUntil: 'networkidle', timeout });
          const text = await page.locator('body').textContent();
          return { success: true, text: text.slice(0, 10000) };
        
        default:
          return { success: false, error: `Unknown action: ${action}` };
      }
    } finally {
      await context.close();
    }
  } catch (e) {
    return { success: false, error: e.message };
  }
}
