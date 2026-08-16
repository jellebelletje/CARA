import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

/**
 * Cloudflare Web Analytics, loaded only when a token is configured at build
 * time. With no token nothing is injected and the page makes no third-party
 * request at all, which is what keeps a local checkout and a fork silent.
 *
 * It is safe to report the page URL here only because answers never sit in
 * location.href: the hash is read once on load and stripped immediately, and
 * nothing writes it back. See loadInitial in App.tsx.
 */
const beaconToken = import.meta.env.VITE_CF_BEACON_TOKEN;
if (beaconToken) {
  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.defer = true;
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token: beaconToken }));
  document.head.appendChild(beacon);
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
