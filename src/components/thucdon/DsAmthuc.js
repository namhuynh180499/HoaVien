import React from 'react'

import hinh1 from './monan/tomhum.jpg'
import hinh2 from './monan/mixao.jpg'
import hinh3 from './monan/canuong.jpg'
import hinh4 from './monan/heoquay.jpg'
import hinh5 from './monan/chaca.jpg'
import hinh6 from './monan/tomchien.jpg'
import hinh7 from './monan/lau.jpg'
import hinh8 from './monan/goi.jpg'
import hinh9 from './monan/ochuong.jpg'

const dsach = [hinh1, hinh2, hinh3, hinh4, hinh5, hinh6, hinh7, hinh8, hinh9]
export default function DsAmthuc() {
    return (
        <div className='dsamthuc'>
            <h1>ẨM THỰC TUẤN THẢO</h1>
            {dsach.map((x) => 
                {
                    return (       
                        <div className='monan'>
                            <img src={x} alt='' />
                            <p></p>
                        </div>
                     
                    )
                }
            )}
                
        </div>
    )
}
