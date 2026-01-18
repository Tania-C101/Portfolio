import { Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import {
  iBootstrap,
  iCSharp,
  iCSS,
  iFlutter,
  iHTML,
  iJS,
  iJava,
  iMySQL,
  iPHP,
  iPython,
  iReact,
  iFirestore,
} from "../images";

const icons1 = [
  { icon: iJava, level: 80 },
  { icon: iPython, level: 60 },
  { icon: iCSharp, level: 80 },
  { icon: iPHP, level: 60 },
  { icon: iFlutter, level: 70 },
  { icon: iFirestore, level: 50 },
];

const icons2 = [
  { icon: iReact, level: 75 },
  { icon: iHTML, level: 80 },
  { icon: iCSS, level: 80 },
  { icon: iJS, level: 65 },
  { icon: iBootstrap, level: 75 },
  { icon: iMySQL, level: 80 },
];

const Background = () => {
  return (
    <Grid className="back-cover">
      <Grid className="back-left">
        <Grid sx={{ padding: "5% 7% 3% 7%" }}>
          <center>
            <SchoolIcon />
            <p style={{ fontWeight: "bold" }}>
              Bachelors of Information Technology <br />
              University of Moratuwa
              <br /> Sri Lanka
            </p>
            <p style={{ fontSize: "12.5px", lineHeight: "1.5rem" }}>
              Outstanding academic performance
              <br />
              <strong>
                - Dean's List - GPA 4.04 / 4.2 in L1S2 <br />
                - Dean's List - GPA 4.02 / 4.2 in L3S2 <br />
              </strong>
              Maintained a GPA above 3.70 in L2S1 & L2S2
            </p>
          </center>
        </Grid>
        <Grid sx={{ padding: "0% 7% 3% 7%" }}>
          <center>
            <SchoolIcon />
            <p style={{ fontWeight: "bold" }}>
              BSc (Hons) in HRM & Leadership
              <br />
              Northumbria University
              <br />
              United Kingdom
            </p>
            <p style={{ fontSize: "12.5px", lineHeight: "1.5rem" }}>
              Second Class - Upper Division
            </p>
          </center>
        </Grid>
        <Grid sx={{ padding: "0% 7% 7% 7%" }}>
          <center>
            <SchoolIcon />
            <p style={{ fontWeight: "bold", lineHeight: "1.5rem" }}>
              EDEXCEL A/L Examination
            </p>
            <p style={{ fontSize: "12.5px" }}>
              {" "}
              Gateway International School, Colombo
            </p>
            <p style={{ fontWeight: "bold", lineHeight: "1.5rem" }}>
              GCE O/L Examination
            </p>
            <p style={{ fontSize: "12.5px" }}> Southlands College, Galle</p>
          </center>
        </Grid>
      </Grid>
      <Grid className="back-right">
        <br />
        <center>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Technical Background
          </p>
        </center>
        <Grid className="back-right-grid">
          <Grid className="back-left-col">
            {icons1.map((tech, index) => {
              return (
                <div>
                  <Grid className="back-right-row" key={index}>
                    <Grid>
                      <img
                        src={tech.icon}
                        alt={`tech-icon-${index}`}
                        style={{ width: "60px", height: "55px" }}
                      />
                    </Grid>

                    <Grid>
                      <div className="progress-bar">
                        <div
                          style={{
                            width: `${tech.level}%`,
                            background: "#8A2BE2",
                            height: "100%",
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Grid>
          <Grid className="back-right-col">
            {icons2.map((tech, index) => {
              return (
                <div>
                  <Grid className="back-right-row" key={index}>
                    <Grid>
                      <img
                        src={tech.icon}
                        alt={`tech-icon-${index}`}
                        style={{ width: "60px", height: "55px" }}
                      />
                    </Grid>

                    <Grid>
                      <div className="progress-bar">
                        <div
                          style={{
                            width: `${tech.level}%`,
                            background: "#8A2BE2",
                            height: "100%",
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Background;
