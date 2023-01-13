import React, { useContext, useEffect, useRef, useState } from "react";
import './Window.style.css'
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg'
import {ReactComponent as MaximizeIcon} from '../../assets/icons/maximize.svg'
import {ReactComponent as MinimizeIcon} from '../../assets/icons/minimize.svg'

import { getTaskContext } from "../../Context";

function Window({currentFocus, setCurrentFocus, onFocus, app, setMenuItems}){

    const [posX, setPosX] = useState(document.body.scrollWidth / 2 - 500);
    const [posY, setPosY] = useState(document.body.scrollHeight / 2 + 200);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const onPress = useRef(false);
    const xOffset = useRef(0);
    const yOffset = useRef(0);
    const {tasks, setTasks} = useContext(getTaskContext());
    const [isMaximized, setMaximized] = useState(false);
    const [isMinimized, setMinimized] = useState(false);
    const [additionalContent, setAdditionalContent] = useState({});

    const menuItems = useRef([]);

    
    useEffect(() => {
        
        let mouseMove = (e) => {
            setMouseX(e.pageX);
            setMouseY(e.pageY);
        }


        window.addEventListener('mousemove',mouseMove)
    
    
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            setMenuItems([])
        }
    }, [])


    function onMouseDown(e){

        console.log(e.target.classList)

        if(e.target.classList.contains('draggable-bar')){

            

            onPress.current = true;
            xOffset.current = (e.nativeEvent.offsetX)
            yOffset.current = (e.nativeEvent.offsetY)
        }
        

    }

    function onMouseLeave(e){
        onPress.current = false;
    }

    function onMouseMove(e){
        
        if(onPress.current){

            if(isMaximized){
                setMaximized(false);
            }

            setPosX(mouseX - xOffset.current);

            if((mouseY - yOffset.current) >= 30){//Won't go over the menu
                setPosY(mouseY - yOffset.current);
            }
        }
     
    }

    function closeWindow(){
        setTasks(tasks.filter((value) => value._id !== app._id))
    }

    function maximize(){

        setMaximized(true);
        setPosX(0)
        setPosY(30)
    }

    function minimize(){

    }

    function handleFocus(){

        setMenuItems(menuItems.current)
        setCurrentFocus(app._id)

    }

    function defineMenuItems(items){
        menuItems.current = items
        handleFocus();
    }

   
    

    return <div onMouseDown={handleFocus} style={{left: posX, top: posY, width: app.defaultSize ? app.defaultSize.width : null,  height: app.defaultSize ? app.defaultSize.height : null}} className={"window "+ (app.transparent? 'transparent ' : '') + (isMaximized ? 'maximize ' : '') + (currentFocus === app._id ? 'focus ' : '')}>

        <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseUp={onMouseLeave} onMouseDown={onMouseDown} className="draggable-bar">
            
            <div onClick={closeWindow} className="button close">
                <CloseIcon className="icon" />
            </div>

            {
                !app.defaultSize && <>
                        <div onClick={closeWindow} className="button minimize">
                            <h5 className="icon" >-</h5>
                        </div>

                        <div onClick={maximize} className="button maximize">
                            <MaximizeIcon className="icon" />
                        </div>

                </>
            }
           
            <div className="additional-content">

                {
                    additionalContent.onGoBack && <div>

                    </div>
                }


            </div>

        </div>

        <div className="container">
            {app.ReactComponent && <app.ReactComponent currentFocus={currentFocus} id={app._id} menuItems={defineMenuItems}  onFocus={onFocus} />}
        </div>


    </div>

}

export default Window
