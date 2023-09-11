import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './views/App'
import '../src/views/components/styles/common.scss'
import  '../src/views/components/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
