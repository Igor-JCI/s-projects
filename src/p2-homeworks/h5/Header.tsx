import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}
                     style={({isActive}) => isActive ? {color: "cyan"} : {}}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}
                     style={({isActive}) => isActive ? {color: "cyan"} : {}}>junior</NavLink>
            <NavLink to={PATH.POST_JUNIOR} className={s.link}
                     style={({isActive}) => isActive ? {color: "cyan"} : {}}>post-junior</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
