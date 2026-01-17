import { createContext } from "react";
import runChat  from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
   
     const onSent = async (promt) => {
         const res = await runChat(promt);
            console.log(res);
     }

    
    onSent("what is react.js?");
     


    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;