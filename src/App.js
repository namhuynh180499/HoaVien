import React, { useState } from 'react';

import Top from './components/top/Top'
import Datlich from './components/datlich/Datlich'
import Bottom from './components/bottom/Bottom'
import GioiThieu from './components/gioithieu/GioiThieu';
import Menu from './components/menu/Menu';
import ThucDon from './components/thucdon/ThucDon';
import Trangtri from './components/trangtri/Trangtri';
import DichVuKhac from './components/dichvu/DichVuKhac';

import { openMenu } from './components/top/Top';
import './App.css';
function App() {
  const [pageNum, setpageNum] = useState(1);
  function Main(props) {
    if(props.num == 1) return <GioiThieu/>
    if(props.num == 2) return <Trangtri/>
    if(props.num == 3) return <ThucDon/>
    if(props.num == 4) return  <DichVuKhac />
    if(props.num == 5) alert("Hiện tại chưa có ưu đãi mới.")
  }
  function setPage(e) {
    window.scrollTo(0, 0);
    setpageNum(e.target.id)
    console.log(pageNum)
    openMenu();
  }
  return (
    <div>
      <Menu btn={setPage}/>
      <Top />
      <Main num={pageNum} />
      <Datlich />
      <Bottom />
    </div>
  );
}

export default App;
