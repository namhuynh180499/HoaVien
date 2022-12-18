import React from 'react'
import './css/gioithieu.css'
import hinh from '../gioithieu/hinh dep/damcuoi.jpg'
export default function GioiThieuChung() {
  return (
    <div className='appGioiThieu'>
            <div className='appGT'>
            <img className='appGTimg' src={hinh} alt='' />
              <h1>GIỚI THIỆU CHUNG</h1>
              <p>Hoa Viên Tuấn Thảo là địa điểm tổ chức tiệc cưới,
                 hội nghị và sự kiện trọn gói chuyên nghiệp uy tín
                 bậc nhất TP. Long Khánh tọa lạc tại Phường Xuân Hòa.
                 Hoa Viên Tuấn Thảo sở hữu sảnh hồ bơi phối hợp hoàn hảo
                 cùng kiến trúc CHâu Âu sang trọng. Hệ thống trang thiết
                 bị âm thanh, ánh sáng, màn hình LED hiện đại...
              </p>
              <div className='xemchitiet'>XEM CHI TIẾT</div>
            </div>
            
              
        </div>
  )
}
