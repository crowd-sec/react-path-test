import './App.css';
import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to={'/mypage'}>go to mypage</Link>
    </>
  );
}

function MyPage() {
  return (
    <>
      <div>MyPage</div>
      <Link to={'/'}>go to home</Link>
    </>
  );
}

export default App;
