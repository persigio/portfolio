import React from 'react';
import { Link } from 'gatsby';

export const NavItem = ({title, destination, icon}) => {
    return (
        <li key={`nav-${title}`} className='nav-item'>
            <Link to={destination} role="button">
                <i className={`${icon}`}/>
                {title}
            </Link>
        </li>
    )
}

