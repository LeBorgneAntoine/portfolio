import React, { useEffect } from "react";
import './Settings.style.css';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

function Settings({menuItems}){

    useEffect(() => {

        menuItems([
            {title: 'Settings'}
        ])


    }, [])

    return <div>

    </div>

}

export default Settings;
export {
    SettingsIcon
}