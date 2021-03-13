import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectedImage from "./SelectedImage";
import MediaDetail from "./MediaDetail";

function GalleryComposant(props) {
  console.log(props);
  const [isSelected, setIsSelected] = useState(true);
  const [photoSelected, setPhotoSelected] = useState();
  const imageRenderer = useCallback(({ index, left, top, key, photo }) => (
    <div onClick={() => handleOnClick(props.photos[index])}>
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
  ));

  let photo;

  const handleOnClick = (photo) => {
    setIsSelected(!isSelected);
    setPhotoSelected(photo);
    console.log("photo")
    console.log(photo)
    console.log("photoSelected")
    console.log(photoSelected)
  };

  if (isSelected) {
    photo = <Gallery renderImage={imageRenderer} photos={props.photos}  />;
  } else {
    // let src = photoSelected?.src;

    photo = (
      <div className="detail-photo">
        {" "}
        <div className="btn-retour-detail" onClick={handleOnClick}>
          {" "}
          <FontAwesomeIcon icon={["fa", "arrow-left"]} />
          RETOUR
        </div>
      
        <h1 className="titre-detail" > {photoSelected?.titre}</h1>
      
         <h5 className="date-detail">{photoSelected?.date}</h5>{" "}
        <p className="description-detail">{photoSelected?.description}</p>
       

         <div className="media-detail">
        <MediaDetail photoselected={photoSelected}></MediaDetail>
     </div>
      
      </div>
    );
  }

  return <div className="gallery-photo scale-in-top ">{photo}</div>;
}

export default GalleryComposant;
