import React, { useEffect } from "react";
import './AboutThisPortfolio.style.css'
import Lottie from "lottie-react";
import reactAnim from '../../assets/animated/react-js.json'
import { Text } from "../../Components";
import packageJson from '../../../package.json'

function AboutThisPortfolio({menuItems}){

    useEffect(() => {

        menuItems([
            {title: 'About this portfolio', submenu: [
                
            ]}
        ])


    }, [])


    return <div className="about-container">
        <Lottie className="lottie-react" animationData={reactAnim} start loop={false}/>
        <Text primary large>React JS Application</Text>
        <Text secondary medium>Made by: Antoine LE BORGNE</Text>
        <Text secondary medium>V {packageJson.version}</Text>
        <Text secondary medium>Source: <a href="https://github.com/LeBorgneAntoine/portfolio">Github repository</a></Text>

    </div>
}


export default AboutThisPortfolio;
