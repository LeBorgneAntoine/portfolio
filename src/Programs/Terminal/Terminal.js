import React, { useEffect, useRef, useState } from "react";
import './Terminal.style.css';


function Terminal({menuItems, onFocus}){

    const [command, setCommand] = useState('');
    const [terminalLines, setTerminalLines] = useState([]);

    const terminalFocus = useRef();

    useEffect(() => {

        menuItems([

            {title: 'Terminal', submenu: [
                {title: 'About Terminal'},
                {separator: true},
                {title: 'Quit Terminal'}
            ]},

            {title: 'Edit', submenu: [
                {title: 'Undo'},
                {title: 'Redo'},
                {separator: true},
                {title: 'Copy'},
                {title: 'Cut'},
                {title: 'Paste'},


            ]}

        ])


        document.addEventListener('keydown', registerKeys)

        return () => {
            document.removeEventListener('keydown', registerKeys)
        }


    }, [])

    function registerKeys(e){

        if(onFocus){
            console.log(e)
        }

    }


    function handleKeyStroke(e){
        
        if(e.key === 'Enter'){
            exec();
        }else{

            console.log(e)

        }

    }

    function exec(){
        console.log('exec: ', terminalLines[terminalLines.length])
    }



    return <div tabIndex={0} ref={terminalFocus} onKeyDown={handleKeyStroke}>

        {terminalLines.map((line, index) => <Line line={line} key={index} />)}

    </div>


}

function Line({line}){

    return <h5>{line.data}</h5>

}

export default Terminal;