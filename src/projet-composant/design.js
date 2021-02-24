
import Gallery from "react-photo-gallery";
import React, { useCallback,Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
// function Design(props) {
  class Design extends Component {

    constructor(props) {
      super(props);
      this.handleUnSelectClick = this.handleUnSelectClick.bind(this);
      this.handleSelectClick = this.handleSelectClick.bind(this);
      this.state = {isSelected: false,photoSelected:undefined};
    }

    handleUnSelectClick() {
      this.setState({isSelected: false});
    }
    handleSelectClick(event,photo) {
      this.setState({isSelected: true,photoSelected:photos[photo.index]});

    }
    render() {
      const isSelected = this.state.isSelected;
      let photo;
      if (!isSelected) {
        photo =    <Gallery photos={photos} direction={"column"} onClick={this.handleSelectClick} />;
      } else {
        // let photos = this.state.photoSelected;
        console.log(this.state.photoSelected?.src)
        let src =   this.state.photoSelected?.src
        photo =  <div className="detail-photo"> <div className="btn-retour-detail" onClick={this.handleUnSelectClick}> <FontAwesomeIcon icon={["fa", "arrow-left"]}  />  RETOUR</div>
           <h1> {this.state.photoSelected?.titre}</h1>  <h5>{this.state.photoSelected?.date}</h5> <p>{this.state.photoSelected?.texte}</p> <img src={src}></img> </div>;
        // 
      }
      return (
      <div className="gallery-photo">
         
             {photo}
           </div>
           )
    }



  // var imageselected = false;
  //   const openLightbox = useCallback((event, { photo, index }) => {
  // console.log(index)
  // console.log(photo)
  // imageselected = !imageselected;
  //     }, []);
  //     if(!imageselected){
  //       return (
  //         <div className="gallery-photo">
         
  //           <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
  //         </div>
  //       )
  //     } else{
  //       return (
  //         <div className="gallery-photo">
         
  //          <span> SALUT</span>
  //         </div>
  //       )
  //     }

}
 
export default Design;
export const photos = [
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4,
        texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
        titre:'SKUU',
        date:'2020'
      },
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },

    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4,
      texte:'ui atet volenderit, sitatio tem accus ea velia sum, vel idellab orporem quuntemoles as dus eosae dis il es mos nemque il ma doluptate necatur arisquas etur rat et eliquidi dita exerTa mod fuit ina, nox nequemprobus med Catampror quit Cateri publi sulem, te ad incupiorunum medio num P. Si condam ius se, quem ren tatuidi, quidiis et? Evirtas dactum ignos pat Castrud etium, ubitatuam untrae publiaed arbi publicu liciae ipio vo, nossoltod me cauc rei terum iam tabemus solicer bisti, eti, quit, tam pere nenampo rtiamprit ac re ponfeci tantero',
      titre:'SKUU',
      date:'2020'
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];
  