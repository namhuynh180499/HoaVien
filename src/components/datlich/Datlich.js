import React from 'react'
import './css/datlich.css';
const NhapThongTin = (props) => {
    return (
        <div className='inputInfo'>
            <p className='title'>{props.info}</p>
            <input type="text"/>
        </div>
    )
}
export default function Datlich() {
  return (
    <div>
        <div className='Datlich' id="booking">
            <h4>- ĐẶT LỊCH TƯ VẤN ĐỂ CHÚNG TÔI CÓ THỂ PHỤC VỤ TỐT HƠN -</h4>
            <NhapThongTin info="Họ Tên"/>
            <NhapThongTin info="Điện thoại"/>
            <NhapThongTin info="Ngày giờ"/>
            <NhapThongTin info="Số lượng"/>
            <NhapThongTin info="Hình thức"/>
            
        </div>
    </div>
  )
}
