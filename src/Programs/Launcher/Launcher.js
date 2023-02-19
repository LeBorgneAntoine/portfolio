import React, { useEffect, useState } from "react";
import './Launcher.style.css'
import availableApps from '../../Programs';

function Launcher({closeApp, openApp}){

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {

        let closeLauncher = (e) => {

            if(e.key === 'Escape'){
                closeApp('launcher')
            }
          
        }

        window.addEventListener('keydown',closeLauncher)
        window.addEventListener('click', closeLauncher)

        return () => {
            window.removeEventListener('keydown', closeLauncher)
        }
    }, [])

    function handleSearh(e){

        let value = e.target.value;

        setSearchValue(value);
    }

    function filterApp(app){

        return !app.hidden && app.name.includes(searchValue)

    }

    function openAppFromLaunchpad(app){

        closeApp('launcher');

        openApp(app._id)

    }

    return <>
    <div className="background" />
    <div className="launcher-container">

        <input value={searchValue} onChange={handleSearh} placeholder="Search" className="search-input-launcher" />

        <div className="apps-container">
 
            {availableApps.filter(filterApp).map((app, index) => <AppItem onClick={openAppFromLaunchpad} app={app} key={index} />)}

        </div>


    </div>
    </>

}

function AppItem({app, onClick}){

    const [onOpen, setOnOpen] = useState(false);

    function onClickPerformed(){

        setOnOpen(true);

        setTimeout(() => onClick(app), 200)

    }


    return <div onClick={onClickPerformed} className={"apps-icons-container "+(onOpen? 'open' : '')}>

        
        {app.iconPath && <img src={app.iconPath} className={'apps-icon noselect'} />}

        <h5 className="app-name noselect">{app.name}</h5>

    </div>
}


export default Launcher;