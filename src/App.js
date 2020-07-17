import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from './pages/Products';
import Statistic from './pages/Statistic';
import ActivityLog from './pages/ActivityLog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header storeName="Gal's" />
        <SideBar />
        <Route path="/" exact component={Main} />
        <Route path="/dashboard" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/statistics" component={Statistic} />
        <Route path="/activity" component={ActivityLog} />
      </Router>
    </div>
  );
}

export default App;
