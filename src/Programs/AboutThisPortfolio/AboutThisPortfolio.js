import React, { useEffect } from "react";
import './AboutThisPortfolio.style.css'

function AboutThisPortfolio({menuItems}){

    useEffect(() => {

        menuItems([
            {title: 'About this portfolio', submenu: [
                
            ]}
        ])


    }, [])


    return <div>
        <h1>React App</h1>
    </div>
}


export default AboutThisPortfolio;
