import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const PhotoList = (props) => {
    const results = props.data;
    let photos;
    if (results.length > 0) {
       photos = results.map(photo => <Photo key={photo.id} id={photo.id} server={photo.server} secret={photo.secret} alt={photo.title} />);
    } else {
        photos = <NoPhotos />
    }

    return(
        <ul>
            {photos}
        </ul>
    );
}

export default PhotoList;