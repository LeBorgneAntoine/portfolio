import React, { useEffect } from "react";
import './Dock.style.css'

/**
 * @author Antoine LE BORGNE
 * 
 * Dock component which contain the apps shortcuts by their icons
 * 
 * @param {{apps: Array, onOPenApp: Function}} param0 
 * @returns 
 */
function Dock({apps, onOpenApp, tasks}){

    return <div id="dock_container">

        {apps.filter((app) => app.pined).map((app, index) => <AppIcon index={index} app={app} isOpen={tasks.findIndex((value) => value._id === app._id) >= 0} onClick={onOpenApp} key={index} />)}

        {apps.filter((app) => !app.pined && (tasks.findIndex((task) => app._id === task._id) >= 0)).map((app, index) => <AppIcon index={index} app={app} isOpen={tasks.findIndex((value) => value._id === app._id) >= 0} onClick={onOpenApp} key={index} />)}


    </div>

}

/**
 * @author Antoine LE BORGNE
 * 
 * @param {{app: Object, onClick: Function}} Parameters app: object discribing an application (at "/Programs/index.js"), onClick: Callback function to select the app to open / focus / minimize  
 * @returns An app icon clickable
 */
function AppIcon({app, onClick, isOpen, index}){

    function handleOnClick(e){
        onClick(app)
    }

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    return <div onClick={handleOnClick} className={"app-icon-container "+(isOpen ? 'open' : '')}>

        <app.IconComponent style={{fill: 'auto'}} className={'app-icon'} />

        <div className="bubble-info">
            <h3>{app.name}</h3>
        </div>

    </div>

}


export default Dock;