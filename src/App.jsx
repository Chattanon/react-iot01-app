import { CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeMenu from './views/HomeMenu'
import CalculateMoneyShare from './views/CalculateMoneyShare'
import CalculateNumber from './views/CalculateNumber'

function App() {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/CalculateMoneyShare" element={<CalculateMoneyShare />} />
        <Route path="/CalculateNumber" element={<CalculateNumber />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App