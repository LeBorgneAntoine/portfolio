import React, { useEffect, useState } from "react";
import { Dock, Menu } from "../../Components";
import { getDisplayContext, getTaskContext } from "../../Context";
import availableApps from '../../Programs';
import {Window} from '../../Components';
import './Desktop.style.css';

const TaskContext = getTaskContext();
const DisplayContext = getDisplayContext();

function Desktop(){


    const [tasks, setTasks] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [hideDock, setHideDock] = useState(false);
    const [currentFocus, setCurrentFocus] = useState('');
    const [displayValue, setDisplayValue] = useState(.5);

    useEffect(() => {


        for(let app of availableApps){
            if(app.onStartup)handleOpenApp(app)
        }

    }, [])
    
    

    function handleOpenApp(app, args){

        let existingTask = findTask(app._id)

        if(existingTask){

            setCurrentFocus(app._id)

        }else{

            let tasksCopy = [...tasks];
            if(app.runInBackground)app.silent = true;
            tasksCopy.push(app)
            setTasks(tasksCopy)

        }

    }



    function openApplicationByID(id){

        let existingTask = findTask(id)

        if(existingTask){

            setCurrentFocus(id)

        }else{

            let appObject = findApp(id);

            if(appObject){
                let tasksCopy = [...tasks];
                tasksCopy.push(appObject)
                setTasks(tasksCopy)
            }else{
                console.log('inexisting app')
            }

            

        }

    }

    function findApp(id){
        return availableApps.find((app) => app._id === id)
    }

    function findTask(id){
        return tasks.find((task) => task._id === id);
    }

    function overlapDock(isOverlaping){
        setHideDock(isOverlaping);
    }

    return <div className="full-screen desktop">

        <DisplayContext.Provider value={{displayValue, setDisplayValue}}>
            <TaskContext.Provider value={{tasks, setTasks}}>

                <Menu openApp={openApplicationByID} currentMenuItems={menuItems} />

                {tasks.map((app, index) => <Window currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} menuItems={menuItems} setMenuItems={setMenuItems} onOverlapDock={overlapDock} app={app} key={index} />)}

                <Dock tasks={tasks} hide={hideDock} apps={availableApps} onOpenApp={handleOpenApp} />

            </TaskContext.Provider>
        </DisplayContext.Provider>
       
    
    </div>
 
}


export default Desktop;