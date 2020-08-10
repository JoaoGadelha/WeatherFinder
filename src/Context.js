import React from 'react';
import { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    let [query, setQuery] = useState({});
    return (
        <Context.Provider value={[query, setQuery]}>
            {props.children}
        </Context.Provider>
    )     
}

export default Provider;