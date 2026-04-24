import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListaTarefas from './ListaTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="card"><p>🔄 Loading tasks...</p></div>}>
      <ListaTarefas />
    </Suspense>
  </StrictMode>,
)
