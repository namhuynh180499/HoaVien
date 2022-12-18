import React, { useState } from 'react'
import chaCa from './monan/chaca.jpg'
import comChien from './monan/menu/comchien.jpg'
import lauThai from './monan/menu/lauthai.jpg'
import chagio from './monan/menu/chagio.jpg'
import tomRang from './monan/menu/tomrang.jpg'
import thach from './monan/menu/thach.jpg'
import panna from './monan/menu/panna.jpg'
import tomhum from './monan/menu/tomhum.jpg'
const menu1 = {phan: "KHAI VỊ",mon: [["Chả cá",chaCa],["Chả giò chiên",chagio] ]}
const menu2 = {phan: "MÓN CHÍNH",mon: [["Cơm chiên",comChien],["Lẩu thái",lauThai] ]}
const menu3 = {phan: "ĐẶC BIỆT",mon: [["Tôm Hùm",tomhum],["Tôm rang",tomRang] ]}
const menu4 = {phan: "TRÁNG MIỆNG",mon: [["Thạch Trái cây",thach],["Panna Cotta",panna] ]}

function Combo(props) {
    return(
        <div className='comboset'>
            <div className='set'>{props.menu.phan}</div>
            {props.menu.mon.map((x) => 
                <div className='food'>{x[0]}</div>
            )}
        </div>
    )
}
export default function ComboSet() {
    const dsmenu = [0, menu1,menu2,menu3,menu4]
    const [page, setPage] =useState(1);
    return (
    <div className='xemthucdon'>
        <div className='combo'>
        <div className='combopage'>
            <div className='btnPage prev' onClick={() => {if(page >1){setPage(page -1)}}}>&#60;</div>
            <div className='paging'>PAGE {page} OF 4</div>
            <div className='btnPage next'  onClick={() => {if(page <4){setPage(page +1)}}}>&#62;</div>
        </div>
            <Combo menu={dsmenu[page]}/>
        </div>
        <div className='comboimg'>
            {dsmenu[page].mon.map((x) => <img src={x[1]} alt='' />)}
        </div>
    </div>
  )
}
