import React, {useState, useEffect} from 'react'
import API from "../../util/API"

function ImageRender(props) {
    const [photos, setPhotos] = useState([]);
    const term = props.keywords

    console.log(term)

    useEffect(() => {
        const getPhotos = setTimeout(() => {
            renderPictures();
        }, 3000)

        return () => clearTimeout(getPhotos)
    })    
      
    const renderPictures = async () => {
            const response = await API.get(`/v1/search`, {
                params: {
                    query: term,
                    per_page:15,
                    page:1
                },
            })
            console.log(response)
    }

    return (
        <div>
            <h1>images go here</h1>
        </div>
    )
}

export default ImageRender
