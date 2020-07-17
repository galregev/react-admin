import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header storeName="Gal's" />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
