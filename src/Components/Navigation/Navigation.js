import React, { Children, cloneElement } from "react";
import Text from "../Text/Text";
import './Navigation.style.css'
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg'
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'


function Navigation({full, currentPageID, setPageID, children, userInfo}){

    return <div className={"navigation-container "+(full && 'full')}>

        <div className="search-section">
            <SearchIcon className='search-icon' />
            <input placeholder="Search..." className="search-nav" />
            <div className="cancel-search">
                <CloseIcon className='icon' />
            </div>
        </div>  




        {
           Children.map(children, (child) => cloneElement(child, {currentPageID, setPageID}))   
        }

        {userInfo && <div className="user-info-container">
            <div className="profile-picture-wrapper">
                <img className="small-profile-picture" src={userInfo.profilePicture} />
            </div>
            <div className="text-user-info">
                <Text bold medium>{userInfo.username}</Text>
                <Text small secondary>$17,78</Text>
            </div>
        </div>}
    </div>  

}

function Link({Icon, pageID, currentPageID,  setPageID, children}){
    return <div className={"link-container "+(pageID === currentPageID? "active" : "")}>
        {Icon && <Icon className={'link-icon'} />}
        <h5 className="noselect">{children}</h5>
    </div>
}

function Categoryie({categorie}){

    return <div className="categorie-container">
        <h5>{categorie.categorie}</h5>
        {categorie.tabs.map((tab, index) => <div key={index} className="navigation-tab"><h3>{tab.title}</h3></div>)}
    </div>

}

function NavigationPages({children, pageID, currentPageID, setPageID}){

    return <div className="page-container">
         {Children.map(children, (child) => cloneElement(child, {currentPageID, setPageID}))   }
    </div>

}

function Page({pageID, currentPageID, children, setPageID, className}){

    return <div className={"page-container "+(pageID === currentPageID && "visible ")+(className? className : '')}>

        {Children.map(children, (child) => cloneElement(child, {currentPageID, setPageID}))   }

    </div>

}

export default Navigation;
export {
    Link,
    NavigationPages,
    Page
}