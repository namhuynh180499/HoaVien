import React from 'react'
import './css/gioithieu.css'
import view1 from './hinh dep/view1.jpg'
import view2 from './hinh dep/view2.jpg'
import view3 from './hinh dep/view3.jpg'
export default function Hinhthuc() {
  return (
    <div className='dichvu'>
        <div className='dv'><img src={view1} alt=''/></div>
        <div className='dv'><img src={view2} alt=''/></div>
        <div className='dv'><img src={view3} alt=''/></div>
    </div>
  )
}
