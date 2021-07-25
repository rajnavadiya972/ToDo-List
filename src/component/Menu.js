import React from 'react';
import logo from './6.gif';
import {Link} from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <>
            <nav>
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link exact className="link" to='/ToDo'>ToDo</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;
