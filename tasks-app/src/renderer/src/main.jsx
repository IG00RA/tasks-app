import './assets/main.css'
import 'modern-normalize'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
    <App />
  </SnackbarProvider>
)
