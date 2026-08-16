/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Cloudflare Web Analytics beacon token. Absent means no analytics at all. */
  readonly VITE_CF_BEACON_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
