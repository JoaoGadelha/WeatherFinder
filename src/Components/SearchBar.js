import React, { useState, useEffect } from 'react';
import Result from './Result'

function SearchBar() {
    let [query, setQuery] = useState({});
    let [state, setState] = useState('');
    const API_key = 'eebebf1634f1daa8cb83bba4997df83d'; // Remove api key from here. This is not safe.
    let timeOut;
    let aux;
    let prevState = '';

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
            <div>
                <form onSubmit={onSubmit}>
                    <input placeholder='Insert your search here...' value={state} onChange={onChange} />
                    <button>GO</button>
                </form>
                <Result query={query} />
            </div>
        )
}

export default SearchBar