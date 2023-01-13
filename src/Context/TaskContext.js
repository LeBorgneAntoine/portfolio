import { createContext } from "react";

let TaskContext

/**
 * 
 * @returns {import("react").ContextType}
 */
function getTaskContext(){

    if(!TaskContext)TaskContext = createContext([]);
    return TaskContext;
}

export {
    getTaskContext
} 