import GalleryComposant from "./galleryComposant";
import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { Post } from "./Post";

function ServicePress(props) {
  const [photos, setPhotos] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
   
    var projectLab = 'presses';
    if(props.categorie === "all"){
     projectLab =  projectLab + "(orderBy: ordreApparition_ASC)"
    }
  else {
      projectLab =  projectLab + "(where: {categorie:"+ props.categorie +"})"
     }
    const fetchPhotos = async () => {
      const { presses } = await request(
        "https://api-eu-central-1.graphcms.com/v2/cklxqdvb5adg701z5dr479rzm/master",
        `
        { 
          ${projectLab}
          {
            id
            titre
            description
            images {
              id
              url
            }
            date
            mainWidth
            mainHeight
            secondWidth
            secondHeight
            thirdWidth
            thirdHeight
            fourthWidth
            fourthHeight
            urlPremiereVideo
            urlSecondeVideo
            lienExterieur
            lieninsta
          
          }
        }
     
  `
      );
      console.log(presses);
      transformDbToPost(presses);
      setPhotos(presses);
    };

    fetchPhotos();
  }, []);

  const transformDbToPost = (presses) => {
    let postArray = [];
    presses.forEach((photo) => {
      postArray.push(
        new Post(
          photo.date,
          photo.images[0].url,
          photo.description,
          photo.mainWidth,
          photo.mainHeight,
          photo.titre,
          photo.images,
          photo.secondHeight,
          photo.secondWidth,
          photo.thirdHeight,
          photo.thirdWidth,
          photo.fourthHeight,
          photo.fourthWidth,
          photo.urlPremiereVideo,
          photo.urlSecondeVideo,
          photo.lienExterieur,
          photo.lieninsta
         
        )
      );
    });
    setPosts(postArray);
    console.log(postArray);
  };
  return (
    <div>
      {!photos ? (
        "Loading"
      ) : (
        <GalleryComposant photos={posts}></GalleryComposant>
      )}
    </div>
  );
}
export default ServicePress;
