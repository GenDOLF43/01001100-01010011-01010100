import React, { useEffect, useState } from 'react';
import TopLogo from './assets/TopLogo.png'
import ShopLogo from './assets/ShopLogo.png'
import GameLogo from './assets/GameLogo.png'
import TranspLogo from './assets/CardLogo.png'
import Logo from './assets/LSTlogo13.png'
import { Routes, Route, Link } from "react-router-dom";
const tg = window.Telegram.WebApp
import axios from './axios'

function Menu() {
    const [count, setCount] = useState(0.000000)
    const [balance, setBalance] = useState(0.000000)
    const User = {"tg":"1247098824"}

    useEffect(()=>{
        axios.post('/api/main',{User}, (req,res)=>{
        }).then((respons) => {
            setBalance(respons.data.balance)
        })
    },[])

    function HUI(){
        axios.post('/api/main/click',{User}, (req,res) => {
        }).then((respons) => {
                setBalance(respons.data)
                
            
            
        })
    }

    //onClick={() => setCount((count) => count + 0.000001)}
    return(
        <>
    <div className='Main'>
        <div>
            <div className='HZ'>Ваш счёт:</div>
            <div className='Ammount'>{balance?.toFixed(6)}<img src={Logo} className='TopLogo'></img></div>
        </div>
        <div className='MenuUser'>
        <Link to='/01001100-01010011-01010100/Top'>
            <button className='ButtMenu1'><img src={TopLogo} className='Logo'></img>Топ</button>
        </Link>
        <Link to='/01001100-01010011-01010100/shop'>
            <button className='ButtMenu2'><img src={ShopLogo} className='Logo'></img>Магазин</button>
        </Link>
        <Link to='/01001100-01010011-01010100/Game'>
            <button className='ButtMenu3'><img src={GameLogo} className='Logo'></img>Игры</button>
        </Link>
          <div>
            <Link to='/01001100-01010011-01010100/Transp'>
                <button className='ButtMenu4'><img src={TranspLogo} className='Logo2'></img>Переводы</button>
            </Link>
            </div>
        </div>
      <div className='Mainmenu'>
        <button className="MainButton" onClick={HUI}></button>
      </div>
    </div>
        </>
    )
}
export default Menu