import React, {useContext} from 'react';
import FrenchLang from '../../assets/france.svg'
import EnglishLang from '../../assets/united-kingdom.svg'
import SpanishLang from '../../assets/spain.svg'
import './ToggleLangs.css'

const ToggleLangs = () => {
    return (
        <div className='container-langs'>
            <img src={FrenchLang} />
            <img src={EnglishLang} />
            <img src={SpanishLang} />
        </div>
    );
}

export default ToggleLangs;
