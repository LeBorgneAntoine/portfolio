import React, { useRef } from "react"
import './Slider.style.css'


function Slider({className, value, onChange, valueRange, Icon}){

    const mouseDownRef = useRef()
    const isPressing = useRef()

    function mapValue(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function onMouseDown(e){

        mouseDownRef.current = e.pageX;
        isPressing.current = true;

    }

    function handleMove(e){

        if(isPressing.current){

            let completeRange = e.target.parentNode.parentNode.offsetWidth;
            let currentPosition = e.target.parentNode.parentNode.offsetWidth * mapValue(value, valueRange[0], valueRange[1], 0,1);
            let movementAmount = (e.pageX - mouseDownRef.current);

            onChange(mapValue(e.pageX - e.target.parentNode.parentNode.getBoundingClientRect().left, 0, completeRange , 0, 1))
        

        }
    }   

    function clearMove(){
        //isPressing.current = false;
    }

    return <div   className={"slider-container"}>

        <div style={{width: ((mapValue(value, valueRange[0], valueRange[1], 0, 100)) + '%') }} className="slider-progress">


            <div onMouseLeave={clearMove} onMouseUp={clearMove} onMouseMove={handleMove} onMouseDown={onMouseDown} className="slider-cursor">

            </div>

        </div>


    </div>

}

export default Slider;