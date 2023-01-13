import React, { useEffect } from "react";
import { ReactComponent as ProjectIcon } from '../../assets/icons/app-store.svg';

function Project({menuItems}){

    useEffect(() => {

        menuItems([
            {title: 'Projects'},
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