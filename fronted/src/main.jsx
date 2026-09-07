///////////////////////////////////////////////////////////////////////
//
//  File Name :      main.jsx
//  Description :    Entry point of the React application
//  Responsibility : Renders the App component into the root element
//  Technology :     React
//
///////////////////////////////////////////////////////////////////////

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
