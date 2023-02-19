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
                {title: 'Quit Projects', onClick: () => windowCommands('Quit')}
            ]},
            {title: 'Edit'},
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
            {title: 'Window'},
            {title: 'Help'},
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