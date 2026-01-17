import "./App.css";
import { Suspense, lazy } from "react";
import "./App.css";
// import { AboutMe } from "./features/about/About";
import { HeroSection } from "./features/hero/Hero";
// import { ProjectSection } from "./features/projects/ProjectSection";

const ProjectSection = lazy(() =>
  import("./features/projects/ProjectSection").then((module) => ({
    default: module.ProjectSection,
  })),
);

const AboutMe = lazy(() =>
  import("./features/about/About").then((module) => ({ default: module.AboutMe })),
);

function App() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <ProjectSection />
        <AboutMe />
      </Suspense>
    </main>
  );
}

export default App;
