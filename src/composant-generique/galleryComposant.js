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
    photo = <Gallery renderImage={imageRenderer} photos={props.photos} />;
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
        <h1> {photoSelected?.titre}</h1> <h5>{photoSelected?.date}</h5>{" "}
        <p>{photoSelected?.description}</p>
        {/* <img src={src}></img> */}

         <div className="media-detail">
        <MediaDetail photoselected={photoSelected}></MediaDetail>
     </div>
        {/* {photoSelected?.urlPremiereVideo ? (
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
      />


        
      ) : (
        
      
        <Gallery columns
          photos={[
            { src: photoSelected.images[0]?.url, width: photoSelected.width, height:  photoSelected.height },
            { src: photoSelected.images[1]?.url, width: photoSelected.width2, height:  photoSelected.height2 },
            { src: photoSelected.images[2]?.url, width: photoSelected.width3, height:  photoSelected.height3 },
            { src: photoSelected.images[3]?.url, width: photoSelected.width4, height:  photoSelected.height4 }
          ]}

        />
        )} */}
      </div>
    );
  }

  return <div className="gallery-photo ">{photo}</div>;
}

export default GalleryComposant;
