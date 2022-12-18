import React from 'react'
import './css/menu.css'

import logo from '../bottom/hoavien.jpg'
export default function Menu(props) {
  return (
    <div className='menu'>
      <div className='menuDanhsach'>
        <div className='menu-list' id='1' onClick={props.btn}>- TRANG CHỦ -</div>
        <div className='menu-list' id='2'onClick={props.btn}>- TRANG TRÍ -</div>
        <div className='menu-list'id='3'onClick={props.btn}>- THỰC ĐƠN -</div>
        <div className='menu-list' id='4' onClick={props.btn}>- DỊCH VỤ KHÁC-</div>
        <div className='menu-list'id='5'onClick={props.btn}>- ƯU ĐÃI -</div>
      </div>
      <div className='menuDanhsach diachi'>
        <img src={logo} />
        Đ/c: 207 Nguyễn Trãi P.Xuân Hòa TP.Long Khánh T.Đồng Nai
        <br/>ĐT: 0983 879798 <br/> ( C. Thảo )
        <h4>XEM CHỈ ĐƯỜNG</h4>
      </div>
    </div>
  )
}
