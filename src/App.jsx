import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import District from './components/District'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<District/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
