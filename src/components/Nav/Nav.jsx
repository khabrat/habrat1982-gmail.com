import React from 'react';
import s from './Nav.module.css';
import NavFrends from './NavFrends/NavFrends';
import { NavLink } from 'react-router-dom';
console.log(s);

const Nav = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.activ} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activ}>Messagges</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.activ}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.activ}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.activ}>Settings</NavLink></div>

            <div className={s.item}>
                <NavLink to="/frends" activeClassName={s.activ}>FRENDS
                    <NavFrends />
                </NavLink>
            </div>


        </nav>

    );
}

export default Nav;