import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="notmyhash.apps.googleusercontent.com">
      {/* import.meta.env.VITE_GOOGLE_CLIENT_ID change the clientId to this if you using vite and make sure in .env.local has ket VITE_GOOGLE_CLIENT_ID*/}
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
