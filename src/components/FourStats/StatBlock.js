import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StatBlock({ bgc, number, text, icon, prec }) {
    return (
        <React.Fragment>
            <div className={`stat-item ${bgc}`}>
                <img src="https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/dashboard/circle.svg" className="card-img" alt="card-bg" />
                <FontAwesomeIcon className="stat-icon" icon={icon} />
                <div className="stat-text card-body">
                    <p>{number}</p> <i className="fas fa-glass-cheers"></i>
                    <span>{text}</span>
                </div>
                <span className="increase-by"> Increased by {prec}% </span>
            </div>

        </React.Fragment>
    )
}
