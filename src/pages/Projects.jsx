import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import {
  UoMP1,
  EDAMS1,
  EDAMS2,
  EDAMS3,
  EDAMS4,
  EDAMS5,
  EDAMS6,
  EDAMS7,
} from "../images";
import {
  UoMP2,
  BP1,
  BP2,
  BP3,
  BP4,
  BP5,
  BP6,
  BP7,
  BP8,
  BP9,
  BP10,
} from "../images";
import {
  UoMP3,
  PMS1,
  PMS2,
  PMS3,
  PMS4,
  PMS5,
  PMS6,
  PMS7,
  PMS8,
  PMS9,
  PMS10,
  PMS11,
  PMS12,
  PMS13,
  PMS14,
} from "../images";
import {
  EMS1,
  EMS2,
  EMS3,
  EMS4,
  EMS5,
  EMS6,
  EMS7,
  EMS8,
  EMS9,
  EMS10,
  EMS11,
  EMS12,
} from "../images";
import { DevTownP, HS1, HS2, HS3, HS4 } from "../images";
import { grey } from "@mui/material/colors";

const project_1 = [
  UoMP1,
  EDAMS1,
  EDAMS2,
  EDAMS3,
  EDAMS4,
  EDAMS5,
  EDAMS6,
  EDAMS7,
];
const project_2 = [UoMP2, BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8, BP9, BP10];
const project_3 = [
  UoMP3,
  PMS1,
  PMS2,
  PMS3,
  PMS4,
  PMS5,
  PMS6,
  PMS7,
  PMS8,
  PMS9,
  PMS10,
  PMS11,
  PMS12,
  PMS13,
  PMS14,
];
const project_4 = [
  EMS1,
  EMS2,
  EMS3,
  EMS4,
  EMS5,
  EMS6,
  EMS7,
  EMS8,
  EMS9,
  EMS10,
  EMS11,
  EMS12,
];
const project_5 = [DevTownP, HS1, HS2, HS3, HS4];

const Project = () => {
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
            {project_1.map((src, index) => (
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
            {project_2.map((src, index) => (
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
            {project_3.map((src, index) => (
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
            {project_4.map((src, index) => (
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
      <Grid
        className="horizontal-container"
        sx={{ backgroundColor: "#e9e7e7" }}
      >
        <Grid className="left">
          <Slider {...settings}>
            {project_5.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`carousel-${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            ))}
          </Slider>
        </Grid>
        <Grid className="right"></Grid>
      </Grid>
    </Grid>
  );
};

export default Project;
