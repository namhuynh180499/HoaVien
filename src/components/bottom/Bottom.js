import React from 'react'
import './css/bottom.css'
import logo from './hoavien.jpg'
export default function Bottom() {
  return (
    <div className='bottom'>
        <img src={logo} alt=""/>
        <div className='botInfo'>
          <div className='botDiachi'>
            Địa chỉ: 207 Nguyễn Trãi P.Xuân Hòa TP. Long Khánh
            <br/>Hotline: 0983 879798
          </div>
          <div className='botBtn'>fasfd</div>
        </div>
    </div>
  )
}
