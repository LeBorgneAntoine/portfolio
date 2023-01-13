import React from "react";
import "./Field.style.css"

function Field({password, value, onChange, className, placeholder}){

    function handleChange(e){
        if(onChange)onChange(e.target.value)
    }


    return <input placeholder={placeholder} value={value} onChange={handleChange} className={"default-input "+className} type={password ? "password" : "text"} />
}


export default Field;