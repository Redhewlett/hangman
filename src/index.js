import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GamePlayProvider } from './context/gamePlayContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GamePlayProvider>
    <App />
  </GamePlayProvider>
)
