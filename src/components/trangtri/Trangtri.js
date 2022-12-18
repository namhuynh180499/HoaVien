import React from 'react'
import './trangtri.css'
import hinh from './hinh.jpg'
import hinh1 from './combo/trangtri1.jpg'
import hinh2 from './combo/trangtri2.jpg'
import hinh3 from './combo/trangtri3.jpg'
import hinh4 from './combo/trangtri4.jpg'
import hinh5 from './combo/trangtri5.jpg'
const hinhs = [
    [hinh1, "TIỆC HỒ BƠI"],
    [hinh2, "TRANG TRÍ ĐẶC BIỆT"], 
    [hinh3, "FORM MÀU VÀNG SANG TRỌNG"], 
    [hinh4, "KHUÔN VIÊN THOÁNG MÁT"], 
    [hinh5, "POOL PARTY EDM"]]
export default function Trangtri() {
  return (
    <div className='trangtri'>
        <div className='trangtriImg'>
            <img src={hinh} />
        </div>
        <div>
            <h1>- TRANG TRÍ CHUẨN</h1>
            <p>Đối với mỗi cặp đôi, bên cạnh việc chu toàn cho lễ đón dâu, lựa chọn thực đơn còn phải cân nhắc kĩ lưỡng trong việc lựa chọn sảnh tiệc phù hợp. Để góp phần mang lại một lễ cưới hoàn hảo và đầy ý nghĩa, Grand Palace giới thiệu đến các cặp đôi không gian tổ chức tiệc cưới sang trọng từ thiết kế sảnh đón tiếp lịch thiệp, khu vực bàn đón khách thanh nhã đến hoa tươi trang trí tinh tế sẽ mang đến những giây phút ngọt ngào và ấn tượng cho từng cặp đôi.</p>
            <div className='combo'>
                {hinhs.map((x) => {
                    return(
                    <div className='comboImg'>
                        <img src={x[0]}/>
                        <h3> {x[1]} </h3>
                    </div>)
                })}
            </div>
        </div>
    </div>
  )
}
