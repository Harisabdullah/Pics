//CSS files
import './ImageList.css';

//Libraries
import React from "react";

//Components
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const images = props.images.map(image => {
        return(
            <ImageCard key={image.id} image={image}/>
        )
    })
    
    return <div className={"image-list"}>{images}</div>
};

export default ImageList;