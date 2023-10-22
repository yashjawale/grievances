import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import './theme/theme.css'

export default function App() {
  
  const toastTopRight = useRef<Toast | null>(null);

  // toast message
  const showMessage = (event: React.MouseEvent<HTMLButtonElement>, ref: React.RefObject<Toast>, severity: "success" | "info" | "warn" | "error" | undefined, title: string, description: string) => {
    ref.current?.show({ severity, summary: title, detail: description, life: 2000 });
  };

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Toast ref={toastTopRight} position='top-right' className='p-toast-item' />

      {/* <Button label='Success' onClick={e=>showMessage(e,toastTopRight,'success','Title','Description')}/> */}

    </PrimeReactProvider>
  )
}