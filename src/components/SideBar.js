import React, { useEffect } from 'react'
import '../components/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddNewProduct from './AddNewProduct'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


// fa-tachometer-alt
function MenuItem({ item, icn, isActive }) {
    
    return (
        <Link to={`/${item}`} className="side-item"> 
            <div className="side-icon"> 
                <FontAwesomeIcon icon={icn} 
                className={isActive === true ? 'active' : ''} /> 
            </div>
            <p className={isActive === true ? 'active' : ''}> {item} </p>
        </Link>
    )

}

export default function SideBar() {

    const location = useLocation();

    useEffect(() => {
        get_active();
    })

    const get_active = () => {
        return location.pathname.slice(1,);
    }

    const menuItems = ['dashboard', 'products', 'statistics', 'campains'];
    const menuIcons = {
                        'dashboard': 'sitemap',
                        'products': 'boxes',
                        'statistics': 'chart-line',
                        'campains': 'fire-alt'
                      }
    return (
        <div className="side-bar">
            <ul>
                {menuIcons.Statistics}
                {menuItems.map(item => {
                    return item === get_active() ? 
                    <MenuItem isActive={true} key={item} item={item} icn={menuIcons[`${item}`]} />
                    : <MenuItem isActive={false} key={item} item={item} icn={menuIcons[`${item}`]} />
                })}
                <AddNewProduct />
            </ul>
        </div>
    )
}
