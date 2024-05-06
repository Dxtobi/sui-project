import React from 'react';
import './dsgn/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Ethics from './pages/Ethics.jsx';
import WriteTool from './pages/WriteTool.jsx';
import Bot from './pages/Bot.jsx';

const ChatApp = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}



          <Route path="/ethics" element={<Ethics />} />

          <Route path="/writetool" element={<WriteTool />} />

          <Route path="/bot" element={<Bot />} />



        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default ChatApp;