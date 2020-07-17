import React from 'react'
import '../components/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddNewProduct from './AddNewProduct'


// fa-tachometer-alt
function MenuItem({ item, icn, isActive }) {
    
    return (
        <a href="/" className="side-item"> 
            <div className="side-icon"> 
                <FontAwesomeIcon icon={icn} 
                className={isActive === true ? 'active' : ''} /> 
            </div>
            <p className={isActive === true ? 'active' : ''}> {item} </p>
        </a>
    )

}

export default function SideBar() {
debugger;
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
                    return item === 'dashboard' ? 
                    <MenuItem isActive={true} key={item} item={item} icn={menuIcons[`${item}`]} />
                    : <MenuItem isActive={false} key={item} item={item} icn={menuIcons[`${item}`]} />
                })}
                <AddNewProduct />
            </ul>
        </div>
    )
}
