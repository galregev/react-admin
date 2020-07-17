import React from 'react';
import '../pages/Main.css';
import TopStats from '../components/FourStats/TopStats';
import PageInfo from '../components/PageInfo';
import Charts from '../components/Charts/Charts';

export default function Main() {
    return (
        <div className="main-container">
            
            <PageInfo pageName="Dashboard" />
            <TopStats />
            <Charts />

        </div>
    )
}
