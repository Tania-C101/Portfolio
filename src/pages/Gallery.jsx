import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import {
  LC,
  L1,
  L2,
  L3,
  L4,
  L5,
  L6,
  L7,
  L8,
  L9,
  L10,
  L11,
  L12,
} from "../images";
import { AC, A1, A2, A3 } from "../images";

const logo = [LC, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12];

const art = [AC, A1, A2, A3];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <Grid>
      <Grid
        className="horizontal-container"
        sx={{ backgroundColor: "#e9e7e7" }}
      >
        <Grid className="left">
          <Slider {...settings}>
            {logo.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`carousel-${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            ))}
          </Slider>
        </Grid>
        <Grid className="right">
          <Slider {...settings}>
            {art.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`carousel-${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gallery;
