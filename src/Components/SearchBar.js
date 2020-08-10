import React, { useState } from 'react';
import { useContext } from 'react';
import {Context} from '../Context';

function SearchBar() {
    let [query, setQuery] = useContext(Context);
    let [state, setState] = useState('');
    const API_key = 'eebebf1634f1daa8cb83bba4997df83d'; // Remove api key from here. This is not safe.
    let aux;

    /*da5ba9ec4dd944afe5847fc5baba11fb*/
    const onChange = (e) => {
        e.preventDefault();
        aux = e.target.value;
        setState(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_key}`).then(resp => resp.json()).then(resp => setQuery(resp));
    }

    return (
        <div className='SearchBarContainer'>
            <form onSubmit={onSubmit}>
                <input placeholder='Insert your search here...' value={state} onChange={onChange} />
                <button>GO</button>
            </form>
        </div>
    )
}

export default SearchBar