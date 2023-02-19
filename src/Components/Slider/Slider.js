import React, { useEffect, useRef, useState } from "react"
import './Slider.style.css'


function Slider({className, value, onChange, valueRange, Icon}){

    const mouseOffsetX = useRef()
    const isPressing = useRef()

    const [currentPosition, setCurrentPosition] = useState(200)
    const mouseX = useRef();
    const container = useRef();

    function mapValue(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function onMouseDown(e){

        mouseOffsetX.current = e.target.offsetLeft;
        isPressing.current = true;

    }

    useEffect(() => {

        let onMouseMove = (e) => mouseX.current = e.pageX
    
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }

    }, [])

    function handleMove(e){

        if(isPressing.current){

            let containerPosition = e.target.parentNode.getBoundingClientRect();

            let left = ( e.pageX - containerPosition.left) - e.target.offsetWidth / 2

            if(left >= 1 && left <= (containerPosition.width - e.target.offsetWidth)){
                setCurrentPosition(left)
                onChange(mapValue(currentPosition, 0, containerPosition.width - e.target.offsetWidth, valueRange[0], valueRange[1]))
            }

        }
    }   

    function clearMove(){
        isPressing.current = false;

    }

    return <div ref={container} className={"slider-container " + (className ? className : '')}>

        <div style={{width: currentPosition + 25}} className="slider-progress">

            {Icon && <Icon className={'slider-icon'} />}

        </div>

        <div style={{left: currentPosition}} onMouseLeave={clearMove} onMouseUp={clearMove} onMouseMove={handleMove} onMouseDown={onMouseDown} className="slider-cursor">

        </div>


    </div>

}

export default Slider;