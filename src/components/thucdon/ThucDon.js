import React from 'react'
import './css/thucdon.css'

import hinh from './hoboi.jpg'
import DsAmthuc from './DsAmthuc'
import ComboSet from './ComboSet'
export default function ThucDon() {
  return (
    <div>
        <div className='thucdonImg'>
            <img src={hinh} alt=''/>
        </div>
        <div className='thucdonSet'>
            <h1>SET MENU</h1>
            <h3>Dành cho tiệc cưới</h3>
            <p>Được các chuyên gia ẩm thực giàu kinh nghiệm của 
            Grand Palace chế biến, thực đơn của chúng tôi luôn 
            được đầu tư và đổi mới liên tục sẽ mang đến cho thực 
            khách những món ăn đa dạng và có sự dung hoà giữa văn 
            hoá ẩm thực Á - Âu, đáp ứng tất cả các nhu cầu của quý
            khách.
            </p>
            <ComboSet />
          
        </div>
        <DsAmthuc />

    </div>
  )
}
