import React from "react";
import './Navigation.style.css'

function Navigation({navigation, onNavigation}){

    return <div className="navigation-container">
        {
            navigation.map((categorie, index) => <Categoryie categorie={categorie} key={index} />)
        }
    </div>  


}


function Categoryie({categorie}){

    return <div className="categorie-container">
        <h5>{categorie.categorie}</h5>
        {categorie.tabs.map((tab, index) => <div key={index} className="navigation-tab"><h3>{tab.title}</h3></div>)}
    </div>

}

export default Navigation;