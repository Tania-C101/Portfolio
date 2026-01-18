import { HomeCover } from "../images";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "\" F I N D \n  M E \n I N \n 1's & 0's!\" \n - Tania";

  useEffect(() => {
    let i = 0;
    const speed = 100;

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup
  }, []); // Empty dependency array = runs once on mount
  return (
    <div className="home-background">
      <img src={HomeCover} alt="Home cover page" className="home" />
      <div class="typing-overlay">
        <center>
          <span class="typewriter-text">{displayText}</span>
        </center>
      </div>
    </div>
  );
};

export default Home;
