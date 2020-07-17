import React, { useState } from 'react'
import '../components/Header.css'
import Avater from '../assets/img/avater.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Logo({store}) {
    return (
        <span className="logo"> 
            <FontAwesomeIcon className="logo-icon" icon="layer-group" />
            {store} Store
        </span>
    )
}

function TopSearchBar() {
    return (
        <div className="searchContainer">
            <FontAwesomeIcon className="searchIcon" icon="search" />
            <input className="topSearch" placeholder="Search..." />
        </div>
    )
}

function AdminDetails() {

    const [state, setState] = useState(false);

    return (
        <div className="admin-details" onClick={() => setState(!state)}>
            <div className={state === true ? 'drop-down-open' : 'drop-down-closed'}>
                <Link to="/activity" className="dropdown-item">
                    <FontAwesomeIcon style={{marginRight: '.7em', color: 'green'}}  icon="sync-alt" />
                    Activity log
                </Link>
                <a href="/" className="dropdown-item">
                    <FontAwesomeIcon style={{marginRight: '.7em', color: 'red'}} icon="power-off" />
                    Logout
                </a>
            </div>
            <FontAwesomeIcon className="drop-down-admin" icon="arrow-down" />
            <div className="admin-name"> Gal Regev <span> SuperAdmin </span> </div>
            <img src={Avater} className="avater" alt="avater" />
        </div>
    )
}

export default function Header({storeName}) {
    return (
        <div className="nav-bar">
            <div className="right-nav">
                <Logo store={storeName}/>
                <TopSearchBar />
            </div>
            <div className="left-nav">
                <FontAwesomeIcon className="notifications" icon="bell" />
                <AdminDetails />
            </div>
        </div>
    )
}
