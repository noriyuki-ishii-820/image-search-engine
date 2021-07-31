import React, {useState, useEffect} from 'react'
import { createClient } from 'pexels';

function ImageRender() {
    const [keyword, setKeywords] = useState([]);
    const input = localStorage.getItem("keywords")
    
    useEffect(()=> {
        window.addEventListener("keywords", function () {
            console.log("working")
        })
    }, [], input)

    const client = createClient('563492ad6f91700001000001763d74916f644fd5ba78b411e7a19035');
    const query = 'Nature';
    //client.photos.search({ query, per_page: 1 }).then(photos => {...});

    return (
        <div>
            <h1>images go here</h1>
        </div>
    )
}

export default ImageRender
