import HeroSection from "./components/shared/HeroSection";
import Navbar from "./components/shared/Navbar";
import ProductData from "./components/shared/ProductData";
import ProductionData from "./components/shared/ProductionData";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductionData />
      <ProductData />
    </div>
  );
};

export default App;
