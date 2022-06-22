import React from 'react';
import iconUser from "../img/icon/user-solid.svg";
import iconLogout from "../img/icon/arrow-right-from-bracket-solid.svg";
import {NavLink} from 'react-router-dom';
import Logout from './log/Logout';

const Nav = () => {

    return (
        <nav className='iconsNav'>
            <NavLink to='/profil' className='iconUser_container'>
            <i className="fas fa-user" ></i>
            </NavLink>
            <Logout />
        </nav>
    );
};

export default Nav;