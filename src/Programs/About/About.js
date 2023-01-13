import React, { useEffect } from "react";
import { ReactComponent as AboutIcon } from '../../assets/icons/books.svg';

function About({menuItems, onFocus, currentFocus, id}){




    useEffect(() => {

        
            menuItems([
                {title: 'About me'},
                {title: 'File'},
                {title: 'Edit'},
            ])
        

    }, [])


    function handleFocus(){



    }


    return <div onClick={handleFocus}>

    </div>

}

export default About;
export {
    AboutIcon
}