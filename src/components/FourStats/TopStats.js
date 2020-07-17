import React from 'react';
import '../FourStats/TopStats.css';
import StatBlock from './StatBlock';

export default function TopStats() {
    return (
        <div className="flex-container">
            
            <StatBlock bgc="orange" number="371" text="new users" icon="user" prec="60" />
            <StatBlock bgc="blue" number="240" text="shop item" icon="store" prec="10"  />
            <StatBlock bgc="green" number="13" text="today's sale" icon="coins" prec="5" />

        </div>
    )
}
