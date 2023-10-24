import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Issue from './pages/Issue';
import Admin from './pages/Admin';
import { PrimeReactProvider } from 'primereact/api';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import './theme/theme.css'
import 'primeicons/primeicons.css';
import { AppProvider } from './context/AppContext';

// import 'primereact/resources/themes/saga-blue/theme.css'; predefined theme

export default function App() {

  const toastTopRight = useRef(null);
  const [admin, setAdmin] = useState(false)
  const location = useLocation()

  // toast message
  const showMessage = (e, ref, severity, title, description) => {
    ref.current?.show({ severity, summary: title, detail: description, life: 2000 });
  };

  useEffect(() => {
    setAdmin(location.pathname.includes("admin"))
  }, [location])

  return (
    <AppProvider>
      <PrimeReactProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/issues' element={<Admin />} />
          <Route path='/admin/issues/:id' element={<Issue />} />
        </Routes>

        <Toast ref={toastTopRight} position='top-right' className='p-toast-item' />

        {/* <Button label='Success' onClick={e=>showMessage(e,toastTopRight,'success','Title','Description')}/> */}
        <Link to={`${admin ? '/' : '/admin/issues'}`} className='bg-slate-300 rounded-full p-3 flex items-center justify-center fixed bottom-5 right-5 z-50'>
          <i className={`pi ${admin ? 'pi-home' : 'pi-user'}`} style={{ fontSize: "1.25rem" }}></i>
        </Link>
      </PrimeReactProvider>
    </AppProvider>
  )
}
