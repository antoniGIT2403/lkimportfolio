
import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectedImage from "./SelectedImage";
 
function GalleryComposant(props) {
console.log(props)
  const [isSelected, setIsSelected] = useState(true);
  const [photoSelected, setPhotoSelected] = useState();
  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <div onClick={() => handleOnClick(photo)}>
        <SelectedImage
    
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
          photoObj={props.photos[index]}
        />
      </div>
    ),

  );

  let photo;


  const handleOnClick = (photo) => {
    setIsSelected(!isSelected);
    setPhotoSelected(photo);

  };

  if (isSelected) {
    photo = (
      <Gallery
      
        renderImage={imageRenderer}
        photos={props.photos}
      />
    );
  } else {
    let src = photoSelected?.src;
    photo = (
      <div className="detail-photo">
        {" "}
        <div className="btn-retour-detail" onClick={handleOnClick}>
          {" "} <FontAwesomeIcon icon={["fa", "arrow-left"]}  />
          RETOUR
        </div>
        <h1> {photoSelected?.titre}</h1> <h5>{photoSelected?.date}</h5>{" "}
        <p>{photoSelected?.texte}</p> <img src={src}></img>{" "}
      </div>
    );
  }

  return <div className="gallery-photo ">{photo}</div>;
}
 
export default GalleryComposant;
