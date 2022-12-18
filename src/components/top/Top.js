import React from 'react'
import './css/top.css';
export const openMenu = () => {
  let menu = document.querySelector(`.menu`)
  let bookBtn = document.querySelector(`.bookBtn`)
  if(menu.classList[menu.classList.length-1] === 'opening') {
    menu.classList.remove(`opening`)
    bookBtn.classList.remove(`hiding`)
  }else {menu.classList.add(`opening`);bookBtn.classList.add(`hiding`)}
}

export default function Top() {
  let DatLich = document.querySelector(`.Datlich`)
  return (
    
    <div className='top'>
        <div className='topBtn'>
            <div className='menuBtn' onClick={openMenu}>MENU</div>
            <a href='#booking'className='bookBtn'><div >BOOK NOW</div></a>
        </div>
        <div className='topLink'>
            <div className='top-link'><a href="tel:+84026200006">&#9742;</a></div>
            <div className='top-link' onClick={() => {alert("Chưa hỗ trợ")}}>&#9993;</div>
            <div 
            className='top-link' 
            style={{color: "rgb(199, 77, 77)"}}
            onClick={() => {window.scrollTo(0, 2000);}}>
              &#9829;
            </div>
        </div>
    </div>
  )
}