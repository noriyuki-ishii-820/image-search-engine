import React, {useState, useEffect} from 'react'

function Search() {
    const [input, setInput] = useState([]);

    function inputUpdate (event) {
        setInput(event.target.value)   
        console.log(input)     
    }

    return (
        <div>
            <h1>Search Images!</h1>
            <form>
                <label>
                    <input 
                        placeholder="type keywords..."
                        value={input}
                        onChange={inputUpdate}
                    />
                </label>
            </form>
        </div>
    )
}

export default Search
