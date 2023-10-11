import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Contactanos from '../page/Contactanos'
import QuienesSomos from '../page/QuienesSomos'

const ClubRoutes = () => {
  return (
    <Routes>
        <Route path='/sistematkd/' element={<Home/>}/>
        <Route path='/sistematkd/contactanos' element={<Contactanos/>}/>
        <Route path='/sistematkd/quienes-somos' element={<QuienesSomos/>}/>
    </Routes>
  )
}

export default ClubRoutes