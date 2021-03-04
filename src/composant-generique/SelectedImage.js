import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {

  // position: "",
  // top: "50%",
  // left: "50%",
  // /* bring your own prefixes */
  // transform: "translate(-50%, -50%)"
  

};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  photoObj
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isShown, setIsShown] = useState(false);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }



  
  //   return (
  //     <div className="focus-photo">
  //       <div className="btn-retour-detail"  onClick={handleOnClick}><FontAwesomeIcon icon={["fa", "arrow-left"]} ></FontAwesomeIcon> RETOUR</div>
  //       <h1> {photoObj.titre}</h1>
  //       <h5>{photoObj.date}</h5>
  //       <p>{photoObj.texte}</p> 
  //       <img  className="photo-picked"
  //       alt={photo.title}
       
  //       {...photo}
       
  //     />
  //     <p className="keep-scroll"> Keep scrolling to see more </p>
  //     </div>
  //   );
  // }
  // else{ 
  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""} 
    >
   
      <img 
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
       
        onMouseEnter={() => setIsShown(true)}
        
      />
        {isShown && (
        <div className="hover-img" onMouseLeave={() => setIsShown(false)}>
          <div className="hover-title"> 
        <h1> {photoObj.titre}</h1>
        <h5>{photoObj.date}</h5>
        <button className="seemore-btn" > See more </button>
        </div>
        </div>
      )}
          </div>
  );

};

export default SelectedImage;
