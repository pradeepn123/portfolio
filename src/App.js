import About from "./components/About";
import BackToTop from "./components/BackToTop";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <ContactUs />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
