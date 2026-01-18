import { Grid, Link } from "@mui/material";
import { profile } from "../images";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <Grid className="horizontal-cover">
      <Grid className="about-left">
        <center>
          <img src={profile} className="profile-picture" alt="Tania" />
        </center>
        <Grid className="about-row ">
          <Grid sx={{ marginRight: "20px" }}>
            <SchoolIcon />
          </Grid>
          <Grid sx={{ fontSize: "12.5px" }}>
            Bachelors of Information Technology <br />
            <p style={{ fontWeight: "bold" }}>
              University of Moratuwa, Sri Lanka
            </p>
          </Grid>
        </Grid>
        <Grid className="about-row ">
          <Grid sx={{ marginRight: "20px" }}>
            <EmailIcon />
          </Grid>
          <Grid sx={{ fontSize: "12.5px" }}>tania.connects101@gmail.com</Grid>
        </Grid>
        <Grid className="about-row ">
          <Grid sx={{ marginRight: "20px", marginTop: "7px" }}>
            <LinkedInIcon />
          </Grid>
          <Grid sx={{ fontSize: "12.5px" }}>
            <Link
              href="https://www.linkedin.com/in/tania-c101"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <p>Visit my profile</p>
            </Link>
          </Grid>
        </Grid>
        <Grid className="about-row ">
          <Grid sx={{ marginRight: "20px", marginTop: "7px" }}>
            <GitHubIcon />
          </Grid>
          <Grid sx={{ fontSize: "12.5px" }}>
            <Link
              href="https://github.com/Tania-C101"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <p>Visit my profile</p>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid className="about-right">
        <center>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Greetings!</p>
          <p className="about-para">
            My name is Tania Wijayasekara, and I am currently pursuing a
            Bachelor’s degree in Information Technology at the University of
            Moratuwa, Sri Lanka. With a deep-rooted passion for technology and
            innovation, I aspire to become a software engineer who not only
            builds systems but contributes to solutions that improve lives and
            drive positive change in the world. This aspiration evolved into
            purpose during my university years, where I immersed myself in
            programming, system design, and software development. <br />
            <br />
            Each line of code I write isn’t just a technical challenge; it’s a
            step closer to building solutions that matter. Whether it’s
            simplifying workflows, automating tasks, or designing systems for
            greater human impact, I’m driven by the belief that meaningful
            technology is the bridge to a better future. My academic journey at
            one of Sri Lanka’s most reputed institutions has equipped me with
            not just technical foundations, but the ability to think critically,
            w ork collaboratively, and approach challenges with resilience.
            <br />
            <br /> I value learning by doing, and I embrace every opportunity to
            work on real-world problems. As I move forward in my career, I am
            especially interested in using software to address issues in
            business, healthcare, and sustainability. My goal is to build
            intelligent, accessible systems that uplift individuals and
            communities; technology that is ethical, inclusive, and impactful.
            In a world where innovation moves at lightning speed, I aim to keep
            learning, growing, and contributing. I’m not just aspiring to be a
            skilled software engineer, I’m working to become someone who uses
            technology as a tool for empowerment, equity, and lasting change.
          </p>
        </center>
      </Grid>
    </Grid>
  );
};

export default About;
