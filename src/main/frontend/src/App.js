import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import Announcement from './Component/Announcement';
import BoardList from './Component/BoardList';
import Board from './Component/Board';
import "./index.css"
import SideBar from './Component/SideBar';
import Footer from './Component/Footer';
// import NotFound from ''

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div style={{ backgroundColor: 'black', color: 'white' }}>
          <div className='container-sm padding-top-50'>
            <SideBar/>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/board" element={<Board/>} />
              <Route path="/boardList" element={<BoardList />} />
              <Route path="/announcement" element={<Announcement />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
