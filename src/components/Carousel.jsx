import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        index: 0       
    }
    this.prevImg = this.prevImg.bind(this)
    this.nextImg = this.nextImg.bind(this)
  }

  prevImg() {
    this.setState(prev => ({
      index: (prev.index - 1 + images.length) % images.length
    }));
  }

  nextImg(){
    this.setState(prev => ({
        index: (prev.index + 1 + images.length) % images.length
      }));
  }
  

  render(){
    return (
        <div className="whole-div">
        <ArrowBackIosIcon onClick={this.prevImg} />
        <div className="img-div">
         <img id = "img" src={images[this.state.index].img} alt="" />
         <div id="content-div">
            <div id="title-box">
            <h1 className="title">{images[this.state.index].title}</h1>
            </div>
            <div id="subtitle-box">
            <p className="sub-title">{images[this.state.index].subtitle}</p>
            </div>
         </div>
        </div>
        <ArrowForwardIosIcon onClick={this.nextImg} />
        </div>
        
    )
    
  }
  
}

export default Carousel;