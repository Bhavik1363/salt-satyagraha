import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './HomePage/Homepage'
import SaltSatyagrah from './SaltSatyagrah/SaltSatyagrah'
import HistoricEvidences from './HistoricEvidences/HistoricEvidences'
import GandhiBot from './GandhiBot/gandhiBot'
import SatyagrahSamrutiTrust from './SatyagrahSmrutiTrust/SatyagrahSamrutiTrust'
import SocialMedia from './SocialMedia/SocialMedia'
import Contactus from './ContactUs/Contactus'

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
          <Route path='/bot' element={<GandhiBot />} />
          <Route path='/social-media' element={<SocialMedia />} />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
