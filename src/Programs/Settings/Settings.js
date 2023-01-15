import React, { useEffect } from "react";
import './Settings.style.css';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

function Settings({menuItems, windowCommands}){

    useEffect(() => {

        menuItems([
            {title: 'System Settings', submenu: [
                {title: 'About System Settings'},
                {separator: true},
                {title: 'Services'},
                {separator: true},
                {title: 'Hide System Settings'},
                {title: 'Hide Others'},
                {title: 'Erase All Content and Settings'},
                {separator: true},
                {title: 'Quit System Settings', onClick: () => windowCommands('Quit')},

            ]},
            {title: 'Edit'},
            {title: 'View'},
            {title: 'Window'},
            {title: 'Help'},


        ])


    }, [])

    return <div>

    </div>

}

export default Settings;
export {
    SettingsIcon
}