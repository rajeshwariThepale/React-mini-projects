import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import CarouselImg01 from "../Assets/CarouselImg01.jpg";
import CarouselImg04 from "../Assets/CarouselImg04.jpg";
import OrganicImg from "../Assets/OrganicImg.jpg"
import './CarouselSlider.css';

export default function CarouselSlider(){
    return(
        <div className="container-fluid">
            <Carousel>
                <CarouselItem>
                    <img src={CarouselImg01} alt="First-Slide"/>
                    <CarouselCaption>
                        <h3>Slide One </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img src={CarouselImg04} alt="Second-slide"/>
                    <CarouselCaption>
                        <h3>Slide Two </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img src={OrganicImg} alt="Third-slide"/>
                    <CarouselCaption>
                        <h3>Slide Two </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>

        </div>
    )
}