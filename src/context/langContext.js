import React, {createContext, useState} from "react";

export const Context = createContext();

const supportedLangs = ['en', 'fr', 'es'];

// `navigator.language` retourne un truc du genre "fr-FR"

let browserLang = navigator.language.split('-')[0]; // retourne un truc du genre "fr"

// let browserLang = navigator.language.slice(0,2).toUpperCase; // retourne un truc du genre "FR"

console.log(browserLang);

if (supportedLangs.indexOf(browserLang) === -1) {
    alert('Your browser language is not supported. Please use one of the following languages: ' + supportedLangs.join(', '));

    browserLang = 'en';
}

const ContextProvider = ({children}) => {

    const [lang, setLang] = useState(browserLang);

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