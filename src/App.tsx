import { Fragment } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Availability } from "./components/sections/Availability";
import { AboutSection } from "./components/sections/AboutSection";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-grow pt-[100px] px-gutter-sm md:px-gutter-lg max-w-[1120px] mx-auto w-full"
        >
          <Hero />
          <Availability />
          <AboutSection />
          <FeaturedProject />
          <Skills />
        </motion.main>
      </AnimatePresence>
      <Contact />
      <Footer />
    </Fragment>
  );
}
