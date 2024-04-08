import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './HomePage/Homepage'
import SaltSatyagrah from './SaltSatyagrah/SaltSatyagrah'
import HistoricEvidences from './HistoricEvidences/HistoricEvidences'
import SatyagrahSamrutiTrust from './SatyagrahSmrutiTrust/SatyagrahSamrutiTrust'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/salt-satyagrah' element={<SaltSatyagrah />} />
          <Route
            path='/satyagrah-smruti-trust'
            element={<SatyagrahSamrutiTrust />}
          />
          <Route path='/historic-evidences' element={<HistoricEvidences />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
