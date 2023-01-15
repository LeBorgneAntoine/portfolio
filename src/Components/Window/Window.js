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
    const [isSilent, setSilent] = useState(app.silent);
    const [additionalContent, setAdditionalContent] = useState({});

    const menuItems = useRef([]);

    
    useEffect(() => {
        
        let mouseMove = (e) => {
            setMouseX(e.pageX);
            setMouseY(e.pageY);
        }


        window.addEventListener('mousemove',mouseMove)
    
        if(app.silent){
            minimize();
        }
    
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            setMenuItems([])
        }
    }, [])

    

    useEffect(() => {

        if(currentFocus === app._id && isMinimized){
            setMinimized(false);
        }

    }, [currentFocus])


    function onMouseDown(e){

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

        if(app.runInBackground){
            minimize()
        }else{
            setTasks(tasks.filter((value) => value._id !== app._id))
        }
    }

    function maximize(){

        if(!isMaximized){
            setMaximized(true);
            setPosX(0)
            setPosY(30)
        }else{
            setMaximized(false);
            setPosX(0)
            setPosY(30)
        }
        
    }

    function minimize(){
        setMinimized(true);
        setCurrentFocus('')
    }

    function handleFocus(){

        setMenuItems(menuItems.current)
        setCurrentFocus(app._id)
        setMinimized(false);

    }

    function defineMenuItems(items){
        menuItems.current = items
        handleFocus();
    }

    
    function commandInterpret(command){

        if(command === 'Quit') closeWindow();

    }


    return <div onMouseDown={handleFocus} style={{left: posX, top: posY, width: app.defaultSize ? app.defaultSize.width : null,  height: app.defaultSize ? app.defaultSize.height : null}} className={"window "+ (app.transparent? 'transparent ' : '') + (app.tint? 'wallpaperTint ' : '') + (isMaximized ? 'maximize ' : '')  + (isMinimized ? 'minimize ' : '') + (currentFocus === app._id ? 'focus ' : '')}>

        <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseUp={onMouseLeave} onMouseDown={onMouseDown} className="draggable-bar">
            
            <div onClick={closeWindow} className="button close">
                <CloseIcon className="icon" />
            </div>

            <div onClick={minimize} className="button minimize noselect">
                <h5 className="icon" >-</h5>
            </div>

            {
                !app.defaultSize && <>
                     

                        <div onClick={maximize} className="button maximize">
                            <MaximizeIcon className="icon" />
                        </div>

                </>
            }
           
            { additionalContent.stackNavigation && <div className="stack-navigation">

                <div className="back-stack">

                </div>

                <div className="back-stack">

                </div>

            </div>
    
            }

            { additionalContent.search && <input placeholder={additionalContent.search.placeholder? additionalContent.search.placeholder : 'Search...'} className="search-input" />}

        </div>

        <div className="container">
            {app.ReactComponent && <app.ReactComponent additionalContent={setAdditionalContent} currentFocus={currentFocus} onFocus={currentFocus === app._id} windowCommands={commandInterpret} id={app._id} menuItems={defineMenuItems} />}
        </div>


    </div>

}

export default Window
