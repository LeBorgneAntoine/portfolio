import React, { useEffect, useState } from "react";
import { ReactComponent as ProjectIcon } from '../../assets/icons/app-store.svg';
import { Link, Navigation, NavigationPages, Page } from "../../Components";
import {ReactComponent as RecentIcon} from '../../assets/icons/recent.svg';
import {ReactComponent as ReactIcon} from '../../assets/icons/react.svg';
import {ReactComponent as JavaIcon} from '../../assets/icons/java.svg';
import profilePicture from '../../assets/images/photo_profile.png';
import './Project.style.css';


function Project({menuItems, windowCommands}){

    const [pageID, setPageID] = useState('recents');

    useEffect(() => {

        menuItems([
            {title: 'Projects', submenu: [
                {title: 'About Projects'},
                {separator: true},
                {title: 'Settings...'},
                {separator: true},
                {title: 'Services'},
                {separator: true},
                {title: 'Hide Project'},
                {title: 'Hide others'},
                {title: 'Show All'},
                {separator: true},
                {title: 'Quit Projects', onClick: () => windowCommands('Quit')}
            ]},
            {title: 'Edit', submenu: [
                {title: 'Undo'},
                {title: 'Redo'},
                {separator: true},
                {title: 'Cut'},
                {title: 'Copy'},
                {title: 'Paste'},
                {title: 'Paste and Match Style'},
                {title: 'Delete'},
                {title: 'Select ALl'},
                {separator: true},
                {title: 'Start Dictation...'},
                {title: 'Emoji & Symbols'},

                ]},
            {title: 'Store', submenu: [
                {title: 'Back'},
                {title: 'Reload Page'},
                {title: 'Search'},
                {separator: true},
                {title: 'See all'},
                {separator: true},
                {title: 'Recents'},
                {title: 'React'},
                {title: 'Java'},
                {separator: true},
                {title: 'Account'},
                {title: 'Sign Out'},
            ]},
            {title: 'Window', submenu: [
                {title: 'Close'},
                {title: 'Minimize'},
                {title: 'Zoom'},
                {title: 'Tile Window to Left of Screen'},
                {title: 'Tile Window to Right of Screen'},
                {title: 'Replace Tiled Window'},
                {separator: true},
                {title: 'Remove Window from Set'},
                {title: 'Enter Full Screen'},
                {separator: true},
                {title: 'Bring All of Front'},
                {separator: true},
                {title: 'Project'},
            ]},
            {title: 'Help', submenu: [
                {title: 'Projects Help'},
                {title: 'About Projects & Privacy'},
            ]},
        ])

    }, [])

    return <div className="app-full-container project-page">

        <Navigation currentPageID={pageID} setPageID={setPageID} userInfo={{
            profilePicture: profilePicture,
            username: 'Antoine LE BORGNE'
        }}>
            <Link Icon={RecentIcon} pageID={'recents'}>Recents</Link>
            <Link Icon={ReactIcon} pageID={'react'}>React</Link>
            <Link Icon={JavaIcon} pageID={'java'}>Java</Link>
        </Navigation>


        <NavigationPages currentPageID={pageID} setPageID={setPageID}>

            <Page className={'recents-container'} pageID={'recents'}>
                <div className="main-banner">
                    
                </div>
            </Page>

        </NavigationPages>

        
    </div>
}


function renderOnCondition(condition, Render){

    return <Render />

}

function ProjectDescription({config}){

    return <div>



    </div>

}

export default Project;
export {
    ProjectIcon
}