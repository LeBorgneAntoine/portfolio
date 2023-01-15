import React, { useEffect } from "react";
import { ReactComponent as ProjectIcon } from '../../assets/icons/app-store.svg';

function Project({menuItems, windowCommands}){

    useEffect(() => {

        menuItems([
            {title: 'Projects', submenu: [
                {title: 'About Projects'},
                {separator: true},
                {title: 'Quit Projects', onClick: () => windowCommands('Quit')}
            ]},
            {title: 'File'},
            {title: 'Edit'},
            {title: 'View'},
            {title: 'Go'},
            {title: 'Help'},
        ])

    }, [])

    return <div>
        
    </div>
}

export default Project;
export {
    ProjectIcon
}