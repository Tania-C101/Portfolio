import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import {
  DevTownC,
  HsGoogle,
  HsMicrosoft,
  HSAws,
  HsDevApp,
  HsDevCom,
} from "../images";
import {
  SololearnC,
  SCIntermediate,
  SCIntroduction,
  SJsIntroduction,
  SCssIntroduction,
  SHtmlIntroduction,
  SJavaIntermediate,
  SJavaIntroduction,
  SPythonDev,
} from "../images";
import { GLJava, GLOOP, MLJava } from "../images";
import { DPReact, KML } from "../images";

const certificates_1 = [
  DevTownC,
  HsGoogle,
  HsMicrosoft,
  HSAws,
  HsDevApp,
  HsDevCom,
];
const certificates_2 = [
  SololearnC,
  SCIntermediate,
  SCIntroduction,
  SJsIntroduction,
  SCssIntroduction,
  SHtmlIntroduction,
  SJavaIntermediate,
  SJavaIntroduction,
  SPythonDev,
];
const certificates_3 = [GLJava, GLOOP, MLJava];
const certificates_4 = [DPReact, KML];

const Credentials = () => {
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
            {certificates_1.map((src, index) => (
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
            {certificates_2.map((src, index) => (
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
      <Grid className="horizontal-container-blue">
        <Grid className="left">
          <Slider {...settings}>
            {certificates_3.map((src, index) => (
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
            {certificates_4.map((src, index) => (
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

export default Credentials;
