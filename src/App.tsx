import React, { useEffect } from 'react';
import './App.css';
import BaseLayout from './layouts/base-layout/base-layout';
import { useAtom } from 'jotai';
import { messageAtom } from './store/global-atoms';
import { message } from 'antd';

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
    <BaseLayout />
  );
}

export default App;
