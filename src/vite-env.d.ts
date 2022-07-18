/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_URL_GRAPHCMS: string
  readonly VITE_ACCESS_TOKEN_GRAPHCMS: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
