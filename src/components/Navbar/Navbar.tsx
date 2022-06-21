import React from "react";
import s from './Navbar.module.css';
// import s from './Navbar.css'
import {NavLink, Link} from "react-router-dom";

// const setActive = ({ isActive }) => isActive ? s.active : s.link;
// const addActive = ({isActive}) => isActive ? s.active : '';

export const Navbar = () => {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={({isActive}) => isActive ? s.active : ''}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={({isActive}) => isActive ? s.active : ''}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={({isActive}) => isActive ? s.active : ''}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={({isActive}) => isActive ? s.active : ''}>Settings</NavLink>
        </div>
    </nav>);
};