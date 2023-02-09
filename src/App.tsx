import React from 'react';
import Header from './components/layouts/Header';
import { Outlet } from 'react-router-dom';

export default function App()  {
  return (
    <>
    <Header />
    <div id="main">
        <Outlet />
    </div>
    </>  
  );
}