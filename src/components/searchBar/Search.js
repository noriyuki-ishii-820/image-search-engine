import React from 'react'

function Search(props) {

    return (
        <div>
            <h1>Search Images!</h1>
            <form>
                <input 
                    placeholder="type keywords..."
                    value={props.keywords}
                    onChange={props.handleInputChange}
                />
            </form>
        </div>
    )
}

export default Search
