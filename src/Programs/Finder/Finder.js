import React, { useEffect } from "react";
import { Navigation } from "../../Components";
import './Finder.style.css'

function Finder({menuItems, currentFocus, additionalContent}){

    useEffect(() => {

        setItems()

        additionalContent({
            stackNavigation: {
                onPrevious: () => {

                },
                onNext: () => {

                }
            },
            search: {
                placeholder: 'Search File...',
                onChange: (value) => {

                },
                value: null
            }
        })

    }, [])


    useEffect(() => {

       
    }, [currentFocus])

    function setItems(){
        menuItems([
            {title: 'Finder'},
            {title: 'File'},
            {title: 'Edit'},
            {title: 'View'},
            {title: 'Go'},
            {title: 'Window'},
            {title: 'Help'},
        ])
    }

    return <div className="finder-container">

        <Navigation navigation={[
            {categorie: 'Favorites', tabs: [
                {title: 'Recents'},
                {title: 'Downloads'},
                {title: 'DropBox'},
                {title: 'AirDrop'},
                {title: 'Applications'},
                {title: 'Movies'},
                {title: 'Pictures'},
            ]},
            {categorie: 'ICloud', tabs: [
                {title: 'ICloud Drive'},
                {title: 'Documents'},
                {title: 'Desktop'},
                {title: 'Shared'},
                {title: 'Shortcuts'}
            ]}
        ]} />


    </div>
}

export default Finder;