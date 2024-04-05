import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './HomePage/Homepage'
import SaltSatyagrah from './SaltSatyagrah/SaltSatyagrah'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/salt-satyagrah' element={<SaltSatyagrah />} />
          {/* <Route path='/' element={<Homepage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
