import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import First from './pages/First.tsx'
import Second from './pages/Second.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/first' element={<First />} />
          <Route path='/second' element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
