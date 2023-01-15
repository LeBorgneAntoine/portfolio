import React, { useContext, useEffect, useState } from "react";
import './Menu.style.css';
import {ReactComponent as AppleLogo} from '../../assets/icons/apple.svg'
import {ReactComponent as ControlCenterIcon} from '../../assets/icons/control-centre.svg'
import {ReactComponent as SearchIcon} from '../../assets/icons/spotlight.svg'
import {ReactComponent as WifiIcon} from '../../assets/icons/wifi.svg'
import {ReactComponent as BluetoothIcon} from '../../assets/icons/bluetooth.svg'
import {ReactComponent as AirDropIcon} from '../../assets/icons/airdrop.svg'
import {ReactComponent as MoonIcon} from '../../assets/icons/moon.svg'

import moment from "moment";
import { getDisplayContext, getLoginContext, getThemeContext } from "../../Context";
import Slider from "../Slider/Slider";



function Menu({currentMenuItems, openApp}){

    const [currentTime, setCurrentTime] = useState(getTime());
    const [currentMenuOpen, setCurrentMenuOpen] = useState(null);
    const {setLogin} = useContext(getLoginContext());

    function getTime(){
        return moment().format('ddd MMM DD  H:mm A')
    }

    useEffect(() => {

        let timeInterval = setInterval(updateTime, 10000)
        document.addEventListener('click', clearMenu);

        return () => {
            clearInterval(timeInterval);
            document.removeEventListener('click', clearMenu);

        }
    }, [])


    function updateTime(){
        setCurrentTime(getTime())
    }


    function clearMenu(e){

        console.log(e.target.classList.contains('menu-item'))

        if(!e.target.classList.contains('menu-item') && !e.target.classList.contains('clickable-icon')){
            setCurrentMenuOpen(null)

        }
        

    }


    function openAppleMenu(e){
        setCurrentMenuOpen({
            left: e.target.offsetLeft,
            submenu: [
                {title: 'About this Portfolio', onClick: () => {openApp('profolio')}},
                {separator: true},
                {title: 'System settings...'},
                {title: 'App store...'},
                {separator: true},
                {title: 'Recent Items'},
                {separator: true},
                {title: 'Force Quit...'},
                {separator: true},
                {title: 'Sleep'},
                {title: 'Restart...'},
                {title: 'Shut Down...'},
                {separator: true},
                {title: 'Lock Screen'},
                {title: 'Log Out Antoine LE BORGNE...', onClick: () => setLogin(false)},
            ]
        })
    }   

    return <><div id="menu_container" className="noselect">
        
        <div onClick={openAppleMenu} className='clickable-icon'>
            <AppleLogo className='apple-logo' />
         
          
        </div>
        

        {currentMenuItems && currentMenuItems.map((item, index) => <Item setCurrentMenuOpen={setCurrentMenuOpen} index={index} menuItem={item} key={index} />)}

        <div className="right-side">
            <div className='clickable-icon'><SearchIcon className="control-center-icon" /></div>
            <div className='clickable-icon'><ControlCenterIcon className="control-center-icon" /></div>
            <h5>{currentTime}</h5>
        </div>


    </div>
    <SubMenu items={currentMenuOpen} />
    <ControlCenter />
    </>

} 


function ControlCenter(){


    const {theme, setTheme} = useContext(getThemeContext());
    const {displayValue, setDisplayValue} = useContext(getDisplayContext());


    function handleSwitchingTheme(){

        if(theme === 'light-theme'){
            setTheme('dark-theme');
        }else{
            setTheme('light-theme');
        }

    }


    return <div className="control-center-container">

       

        <div className="divide vertical">

            <div className="divide horizontal">
                
                <div className="widget connection">

                    <div className="divide vertical">

                        <div className="control-center-row">   
                            
                            <div className="primary-icon-container">
                                <WifiIcon className="widgets-icon" />
                            </div>

                            <div className="text">
                                <h5 className="primary-text">Wi-Fi</h5>
                                <h5 className="secondary-text">iMod</h5>
                            </div>

                        </div>




                        <div className="control-center-row">   
                            
                            <div className="primary-icon-container">
                                <BluetoothIcon className="widgets-icon" />
                            </div>

                            <div className="text">
                                <h5 className="primary-text">Bluetooth</h5>
                                <h5 className="secondary-text">On</h5>
                            </div>

                        </div>



                        
                        <div className="control-center-row">   
                            
                            <div className="primary-icon-container">
                                <AirDropIcon className="widgets-icon" />
                            </div>

                            <div className="text">
                                <h5 className="primary-text">AirDrop</h5>
                                <h5 className="secondary-text">Everyone</h5>
                            </div>

                        </div>

                   

                    </div>

                </div>

                <div className="divide vertical">

                    <div className="widget night">

                        <div className="secondary-icon-container">
                                <MoonIcon className="widgets-icon" />
                        </div>

                        <div className="divide vertical">
                            <h5 className="primary-text-multiline">Do Not</h5>
                            <h5 className="primary-text-multiline">Disturb</h5>
                        </div>

                    </div>

                    <div className="divide horizontal">

                        <div onClick={handleSwitchingTheme} className="widget theme">




                        </div>

                        <div className="widget share">

                        </div>
                    </div>

                </div>
            </div>


            <div className="widget display">

                <Slider value={displayValue} onChange={setDisplayValue} valueRange={[0, 1]} />

            </div>

            <div className="widget display">
                

            </div>

            <div className="widget display">
                

            </div>
        </div>


       
    

    </div>
}

function Item({menuItem, index, setCurrentMenuOpen}){

    function handleClick(e){

        setCurrentMenuOpen({
            left: e.target.offsetLeft,
            submenu: menuItem.submenu ? menuItem.submenu : []
        })

    }

    return <div onClick={handleClick} className="menu-item">
        <h5 className={"menu-item-title noselect "+(index === 0 ? 'title' : '')}>{menuItem.title}</h5>
    </div>

}

function SubMenu({items}){
    return items ? <div style={{left: items.left}} className={"sub-menu"}>
       {items.submenu.map((item, index) => <SubMenuItems key={index} item={item}/>)}
    </div> : <></>
}

function SubMenuItems({item}){

    return <div onClick={item.onClick} className={item.separator? "menu-separator": "sub-menu-item"}>
        <h5 className="noselect">{item.title}</h5>
    </div>

}


export default Menu;