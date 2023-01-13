import React from "react";


function Button({text, secondary, submit}){
    return <input type={submit? 'submit' : 'button'} value={text} />
}



export default Button;