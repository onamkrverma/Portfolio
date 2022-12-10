import './App.css';
import './responsive.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import PdfView from './components/PdfView';
import ScrollToTop from './components/ScrollToUp';
import NoPageFound from './components/NoPageFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<PdfView/>}/>
    <Route path="/projects" element={<ProjectList/>}/>
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
