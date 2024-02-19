import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Components/Pages/Products';
import Home from './Components/Pages/Home';
import Settings from './Components/Pages/Settings';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SignupForm/SignupForm';
import Analytics from './Components/Pages/Analytics';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignupForm/>}></Route>
        <Route path="/login" exact element={<LoginForm/>}></Route>
        <Route path="/home" exact element={<Home/>}></Route>
        <Route path='/products' exact element={<Products/>}></Route>
        <Route path='/Analytics' exact element={<Analytics/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}