import React, {createContext, useState} from "react";

export const Context = createContext();

const ContextProvider = ({children}) => {

    const [lang, setLang] = useState('EN');

    const toggleLang = (changeLang) => {
        setLang(changeLang);
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;