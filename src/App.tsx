import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
    </main>
  );
};

export default App;
