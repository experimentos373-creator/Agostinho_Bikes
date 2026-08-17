import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function inlineCSSPlugin() {
  return {
    name: 'inline-css-plugin',
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        const assetsDir = path.join(distDir, 'assets');
        if (!fs.existsSync(assetsDir)) return;

        const files = fs.readdirSync(assetsDir);
        const cssFile = files.find(file => file.endsWith('.css'));
        if (!cssFile) return;

        const cssPath = path.join(assetsDir, cssFile);
        const cssContent = fs.readFileSync(cssPath, 'utf8');

        const indexPath = path.join(distDir, 'index.html');
        if (!fs.existsSync(indexPath)) return;

        let indexContent = fs.readFileSync(indexPath, 'utf8');

        const linkRegex = new RegExp(`<link[^>]*rel="stylesheet"[^>]*href="[^"]*${cssFile}"[^>]*>`, 'i');
        const fallbackRegex = /<link[^>]*rel="stylesheet"[^>]*>/i;

        let matched = false;
        if (linkRegex.test(indexContent)) {
          indexContent = indexContent.replace(linkRegex, `<style>${cssContent}</style>`);
          matched = true;
        } else if (fallbackRegex.test(indexContent)) {
          indexContent = indexContent.replace(fallbackRegex, `<style>${cssContent}</style>`);
          matched = true;
        }

        if (matched) {
          fs.writeFileSync(indexPath, indexContent, 'utf8');
          console.log(`[inline-css-plugin] Inlined CSS (${(cssContent.length / 1024).toFixed(1)} KB) into index.html`);
          fs.unlinkSync(cssPath);
        }
      } catch (err) {
        console.error('[inline-css-plugin] Error during inlining:', err);
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCSSPlugin()],
  server: {
    port: 3000,
    host: true
  }
})
