import { createContext } from "react";

let DisplayContext

function getDisplayContext(){

    if(!DisplayContext)DisplayContext = createContext(1);
    return DisplayContext;
}

export {
    getDisplayContext
} 