import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  )
}
