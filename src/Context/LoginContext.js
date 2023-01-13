import { createContext } from "react";

let LoginContext

function getLoginContext(){

    if(!LoginContext)LoginContext = createContext(false);
    return LoginContext;
}

export {
    getLoginContext
} 