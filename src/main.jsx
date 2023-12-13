import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorComp from './ui/ErrorComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorComp} onReset={()=> location.href= '/'}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
