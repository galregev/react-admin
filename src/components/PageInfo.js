import React from 'react'
import '../components/PageInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function PageInfo({ pageName }) {
    return (
        <div className="page-info">
            <FontAwesomeIcon className="page-i-icon" icon={faHome} />
            <p>{pageName}</p>
        </div>
    )
}
