import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { config } from './config.js'

function initializeIntegrations() {
  // 1. Google Search Console Verification Tag
  if (config.googleSearchConsoleKey && config.googleSearchConsoleKey !== "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_KEY") {
    let meta = document.querySelector('meta[name="google-site-verification"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      document.head.appendChild(meta);
    }
    meta.content = config.googleSearchConsoleKey;
  }

  // 2. Google Analytics (GA4) Dynamic Load
  if (config.googleAnalyticsId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.googleAnalyticsId}');
    `;
    document.head.appendChild(inlineScript);
  }
}

initializeIntegrations();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
