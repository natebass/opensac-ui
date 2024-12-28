import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {OpenSacProvider} from '../packages/react/src'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenSacProvider value={'a'}>
      <App />
    </OpenSacProvider>
  </StrictMode>,
)
