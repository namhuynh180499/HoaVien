import React from 'react'
import './css/gioithieu.css'

import Images from './Images'
import GioiThieuChung from './GioiThieuChung'
import Hinhthuc from './Hinhthuc'
export default function GioiThieu() {
  return (
    <div className="App">
        <Images />
        <GioiThieuChung />
        <Hinhthuc />
    </div>
  )
}
