import React from 'react';
import './App.css';
import PrimaryButton from './components/primary-button/primary-button';
import EKAvatar from './components/ek-avatar/ek-avatar';

function App() {
  return (
    <div className="App">
      <PrimaryButton>Kaydet</PrimaryButton>
      <EKAvatar size={64}></EKAvatar>
    </div>
  );
}

export default App;
