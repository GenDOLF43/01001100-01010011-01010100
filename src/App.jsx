import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu'
import Shop from './Shop'
import Top from './top'
import Game from './Game'
import Transp from './Peref'
import { Routes, Route, Link } from "react-router-dom";



function App() {

  return (
      <Routes>
        <Route path='/01001100-01010011-01010100/' element={<Menu />}/>
        <Route path='/01001100-01010011-01010100/shop' element={<Shop />}/>
        <Route path='/01001100-01010011-01010100/Top' element={<Top />}/>
        <Route path='/01001100-01010011-01010100/Game' element={<Game />}/>
        <Route path='/01001100-01010011-01010100/Transp' element={<Transp />}/>
      </Routes>
  )
}

export default App
