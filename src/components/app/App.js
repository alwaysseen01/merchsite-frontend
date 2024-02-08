import './app.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from '../header/header';
import Main from '../main/main';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/t-shirts" component="" />
          <Route path="/sweatshirts" component="" />
          <Route path="/hoodie" component="" />
          <Route path="/backpacks" component="" />
          <Route path="/pants" component="" />
          <Route path="/shirts" component="" />
          <Route path="/hats" component="" />
          <Route path="/" element={<Navigate to="/t-shirts" />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default App;
