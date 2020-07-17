import React from 'react';
import '../pages/Main.css';
import TopStats from '../components/FourStats/TopStats';
import PageInfo from '../components/PageInfo';

export default function Main() {
    return (
        <div className="main-container">
            
            <PageInfo pageName="Dashboard" />
            <TopStats />

        </div>
    )
}
