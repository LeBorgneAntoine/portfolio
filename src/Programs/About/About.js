import React, { useEffect } from "react";
import { ReactComponent as AboutIcon } from '../../assets/icons/books.svg';
import { Section } from "../../Components";

function About({menuItems, onFocus, currentFocus, id}){




    useEffect(() => {

        
            menuItems([
                {title: 'About me'},
                {title: 'File'},
                {title: 'Edit'},
            ])
        

    }, [])

    return <div >
        <Section title={''}>

        </Section>
    </div>

}

export default About;
export {
    AboutIcon
}