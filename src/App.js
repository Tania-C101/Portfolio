import './App.css';
import '@fontsource/poppins'; // Defaults to weight 400
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './nav/NavBar';
import Home from "./pages/Home";
import About from "./pages/About";
import Background from "./pages/Background";
import Projects from "./pages/Projects";
import Credentials from "./pages/Credentials";
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/background" element={<Background />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
