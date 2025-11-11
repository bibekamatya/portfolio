import "./index.css";
import "./App.css";
import { Element } from "react-scroll";
import { NAVITEMS as Sections } from "./dataSheet";
import { SectionProps } from "./interfaces";
import useDarkMode from "./hooks/useDarkmode";
import { useEffect, useRef } from "react";
import Navbar from "./components/landingPage/navbar";
import Contact from "./components/landingPage/contact";
import Footer from "./components/Footer";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section = ({ title, component }: SectionProps) => (
  <Element name={title} className="section lg:pb-32 pb-20">
    {component}
  </Element>
);

const App = () => {
  const [isDarkMode] = useDarkMode();
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.1;

    const smoothScroll = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * ease;
      
      if (smoothContent.current) {
        smoothContent.current.style.transform = `translateY(${-currentScroll}px)`;
      }
      
      requestAnimationFrame(smoothScroll);
    };

    if (smoothWrapper.current) {
      smoothWrapper.current.style.position = 'fixed';
      smoothWrapper.current.style.top = '0';
      smoothWrapper.current.style.left = '0';
      smoothWrapper.current.style.width = '100%';
      smoothWrapper.current.style.overflow = 'hidden';
    }

    if (smoothContent.current) {
      document.body.style.height = `${smoothContent.current.offsetHeight}px`;
    }

    const updateHeight = () => {
      if (smoothContent.current) {
        document.body.style.height = `${smoothContent.current.offsetHeight}px`;
      }
    };

    window.addEventListener('resize', updateHeight);
    smoothScroll();

    return () => {
      window.removeEventListener('resize', updateHeight);
      document.body.style.height = '';
      if (smoothWrapper.current) {
        smoothWrapper.current.style.position = '';
        smoothWrapper.current.style.top = '';
        smoothWrapper.current.style.left = '';
        smoothWrapper.current.style.width = '';
        smoothWrapper.current.style.overflow = '';
      }
    };
  }, []);

  return (
    <>
    <div ref={smoothWrapper} className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <div ref={smoothContent}>
        {Sections.map(({ title, Component }, index) => (
          <div key={title} className={index === 0 ? "w-full pt-4" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
            {Component && (
              <Section key={title} title={title} component={<Component />} />
            )}
          </div>
        ))}
        <Element name="Contact" className="section">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
    <div id="canvas-portal" />
    </>
  );
};

export default App;
