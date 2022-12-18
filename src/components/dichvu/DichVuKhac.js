import React from 'react'
import './dichvu.css'
import hoavien from './hoavien.jpg'
import loto from './loto.jpg'
import tiechoboi from './tiechoboi.jpg'
export default function DichVuKhac() {
  return (
    <div>
        <div className='dichvuImg'>
            <img src={hoavien} alt='' />
        </div>
        <h1>- DỊCH VỤ KHÁC</h1>
        <p className='dichvuContent'>Grand Palace cùng đội ngũ nhân viên chuyên nghiệp 
            và dịch vụ đa dạng sẽ đem đến sự hài lòng và trở 
            thành địa điểm tổ chức tiệc cưới hoàn hảo cho các 
            cặp đôi.
            </p>
        <div className='dichvukhac'>
            <div className='dichvukhac-item'>
                <img src={loto} />
                Lô Tô Show: đoàn Phương Nam,...
            </div>
            <div className='dichvukhac-item'>
                <img src={tiechoboi} alt=''/>
                Trải nghiệm không khí tiệc hồ bơi
            </div>
            <div className='dichvukhac-item'>
                
            </div>
            
            
        </div>
    </div>
  )
}
