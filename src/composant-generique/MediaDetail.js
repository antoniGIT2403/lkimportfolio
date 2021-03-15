import React from "react";
import InstagramEmbed from 'react-instagram-embed';
 
import Gallery from "react-photo-gallery";

const MediaDetail = (props) => {
  let { photoSelected } = props.photoselected;
  let mediaToReturn;

  if (props.photoselected.lienExterieur) {
    var lienExterieur = (
      <div className="link-ext">
        <span> Retrouver tout ici : </span>{" "}
        <a href={props.photoselected.lienExterieur} target="_blank">
          {" "}
          {props.photoselected.lienExterieur}
        </a>{" "}
      </div>
    );

    mediaToReturn = [mediaToReturn, lienExterieur];
  }
  if (props.photoselected.urlPremiereVideo) {
    var premierVideo = (
      <div className="space-media">
        <iframe
          className="iframe-detail"
          src={props.photoselected.urlPremiereVideo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );

    mediaToReturn = [mediaToReturn, premierVideo];
  }

  if (props.photoselected.urlSecondeVideo) {
    var secondeVideo = (
      <div className="space-media">
        <iframe
          className="iframe-detail"
          src={props.photoselected.urlSecondeVideo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
    mediaToReturn = [mediaToReturn, secondeVideo];
  }
  if (props.photoselected.lieninsta) {
    var videoInsta = (
      <div className="space-media">
        <InstagramEmbed
  url={props.photoselected.lieninsta}
  clientAccessToken='625610778288228|6426c6a48886fdbbbe33f36c541c38e6'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
       </div>
    );
    mediaToReturn = [mediaToReturn, videoInsta];
  }

  if (props.photoselected.images) {
    var photosDetail = (
      <div className="space-media">
        <Gallery
          columns
          photos={[
            {
              src: props.photoselected.images[0]?.url,
              width: props.photoselected.width,
              height: props.photoselected.height,
            },
            {
              src: props.photoselected.images[1]?.url,
              width: props.photoselected.width2,
              height: props.photoselected.height2,
            },
            {
              src: props.photoselected.images[2]?.url,
              width: props.photoselected.width3,
              height: props.photoselected.height3,
            },
            {
              src: props.photoselected.images[3]?.url,
              width: props.photoselected.width4,
              height: props.photoselected.height4,
            },
          ]}
        />
      </div>
    );
    mediaToReturn = [mediaToReturn, photosDetail];
  }
  console.log(mediaToReturn);
  return mediaToReturn;
};

export default MediaDetail;
