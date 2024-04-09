import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './HomePage/Homepage'
import SaltSatyagrah from './SaltSatyagrah/SaltSatyagrah'
import HistoricEvidences from './HistoricEvidences/HistoricEvidences'
import GandhiBot from './GandhiBot/gandhiBot'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/salt-satyagrah' element={<SaltSatyagrah />} />
          <Route path='/historic-evidences' element={<HistoricEvidences />} />
          <Route path='/bot' element={<GandhiBot />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
