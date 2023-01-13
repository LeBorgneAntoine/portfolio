import React, { useState } from "react";
import { Dock, Menu } from "../../Components";
import { getTaskContext } from "../../Context";
import availableApps from '../../Programs';
import {Window} from '../../Components';
import './Desktop.style.css'

const TaskContext = getTaskContext();


function Desktop(){


    const [tasks, setTasks] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [hideDock, setHideDock] = useState(false);
    const [currentFocus, setCurrentFocus] = useState('');

    
    function handleOpenApp(app){

        let existingTask = findTask(app._id)

        if(existingTask){

            setCurrentFocus(app._id)

        }else{

            let tasksCopy = [...tasks];
            tasksCopy.push(app)
            setTasks(tasksCopy)

        }

    }


    function findTask(id){
        return tasks.find((value) => value._id === id);
    }

    function overlapDock(isOverlaping){
        setHideDock(isOverlaping);
    }

    function selection(){

    }


    return <div className="full-screen desktop">

        <TaskContext.Provider value={{tasks, setTasks}}>

            <Menu currentMenuItems={menuItems} />

            {tasks.map((app, index) => <Window currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} menuItems={menuItems} setMenuItems={setMenuItems} onOverlapDock={overlapDock} app={app} key={index} />)}

            <Dock tasks={tasks} hide={hideDock} apps={availableApps} onOpenApp={handleOpenApp} />

        </TaskContext.Provider>
    
    </div>
 
}


export default Desktop;