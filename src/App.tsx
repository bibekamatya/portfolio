import "./index.css";
import "./App.css";
import { Element } from "react-scroll";
import { NAVITEMS as Sections } from "./dataSheet";
import { SectionProps } from "./interfaces";
import useDarkMode from "./hooks/useDarkmode";
import { useEffect } from "react";
import Navbar from "./components/landingPage/navbar";
import Contact from "./components/landingPage/contact";
import Footer from "./components/Footer";

const Section = ({ title, component }: SectionProps) => (
  <Element name={title} className="section lg:pb-32 pb-20">
    {component}
  </Element>
);

const App = () => {
  const [isDarkMode] = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
        <Navbar />
        <div>
          {Sections.map(({ title, Component }, index) => (
            <div
              key={title}
              className={
                index === 0
                  ? "w-full pt-4"
                  : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              }
            >
              {Component && (
                <Section key={title} title={title} component={<Component />} />
              )}
            </div>
          ))}
          <Element name="Contact" className="section">
            <Contact />
          </Element>
          <Footer />
        </div>
      </div>
      <div id="canvas-portal" />
    </>
  );
};

export default App;
