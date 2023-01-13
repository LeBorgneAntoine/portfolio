import React, { useEffect, useState } from "react";
import './Menu.style.css';
import {ReactComponent as AppleLogo} from '../../assets/icons/apple.svg'
import {ReactComponent as ControlCenter} from '../../assets/icons/control-centre.svg'
import {ReactComponent as Search} from '../../assets/icons/spotlight.svg'

import moment from "moment";

function Menu({currentMenuItems}){

    const [currentTime, setCurrentTime] = useState(getTime());

    function getTime(){
        return moment().format('ddd MMM DD  H:mm A')
    }

    useEffect(() => {

        let timeInterval = setInterval(updateTime, 10000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])


    function updateTime(){
        setCurrentTime(getTime())
    }

    return <div id="menu_container">
        <AppleLogo className='apple-logo' />
        {currentMenuItems && currentMenuItems.map((item, index) => <Item index={index} menuItem={item} key={index} />)}

        <div className="right-side">
            <Search className="control-center-icon" />
            <ControlCenter className="control-center-icon" />
            <h5>{currentTime}</h5>
        </div>
    </div>

} 

function Item({menuItem, index}){

    return <div className="menu-item">
        <h5 className={"menu-item-title "+(index === 0 ? 'title' : '')}>{menuItem.title}</h5>
    </div>

}

function controlCenter(){

}


export default Menu;