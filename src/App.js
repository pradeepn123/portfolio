import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Slider from './components/Slider';
import ProjectSlider from './components/ProjectSlider';
import jsonData from "./data/featureData.json";
import projectSliderData from "./data/projectSliderData.json";
import resumeData from "./data/resumeData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
          <Header />
          <Slider />
          <Features data={jsonData} />
          <Resume resumedata={resumeData} />
          <ProjectSlider projectdata={projectSliderData} />
          <ContactUs />
          <Footer />
      </div>
      <div id="modal-root"></div>
    </>
  );
}

export default App;
