import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToUp';
import NoPageFound from './components/NoPageFound';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  {/* <Route path="/resume" element={<Resume/>}/> */}
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NoPageFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
