import React, { useEffect } from 'react';
import './App.css';
import { useAtom } from 'jotai';
import { messageAtom } from './store/global-atoms';
import { message } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import SecureLayout from './layouts/secure-layout/secure-layout';
import Home from './pages/home/home';
import SignUp from './pages/sign-up/sign-up';

function App() {
  const [toastMessage] = useAtom(messageAtom);
  const [, setMessage] = useAtom(messageAtom);

  useEffect(() => {
    if (toastMessage.message === '') return;
    switch (toastMessage.type) {
      case 'error':
        message.error(toastMessage.message);
        break;
      case 'info':
        message.info(toastMessage.message);
        break;
      case 'warning':
        message.warning(toastMessage.message);
        break;
      case 'success':
        message.success(toastMessage.message);
        break;
    }
    setMessage({ ...toastMessage, message: '' });
  }, [toastMessage, setMessage]);

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign' element={<SignUp />} />
      <Route path='/home' element={<SecureLayout>
        <Home />
      </SecureLayout>} />
    </Routes>
  );
}

export default App;
