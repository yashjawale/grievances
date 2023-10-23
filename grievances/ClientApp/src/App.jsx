import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { PrimeReactProvider } from 'primereact/api';


export default function App() {


  return (
    <PrimeReactProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </PrimeReactProvider>
  )
}
