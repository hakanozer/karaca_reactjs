import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Dashboard from './Dashboard';
import Login from './Login';

const route = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} ></Route>
    <Route path='/dashboard' element={<Dashboard/>} ></Route>
  </Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( route );

