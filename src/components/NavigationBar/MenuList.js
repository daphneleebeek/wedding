import React from 'react';
import { menuText } from './texts.js';
import { NavLink } from 'react-router-dom';

const MenuList = props => {
    return(
        <div className={props.classes}> 
            <li><NavLink exact to="/" activeClassName="active" >{menuText(props.language).home}</NavLink></li>
            <li><NavLink to="/practical_info" activeClassName="active">{menuText(props.language).practical_info}</NavLink></li>
            <li><NavLink to="/map" activeClassName="active">{menuText(props.language).map}</NavLink></li>
            <li><NavLink to="/gift_list" activeClassName="active">{menuText(props.language).gift_list}</NavLink></li>
        </div>
    )
}

export default MenuList;