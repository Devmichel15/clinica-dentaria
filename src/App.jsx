import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HeadLine from "./Components/HeadLine";
import About from "./Components/About";
import ServicesLine from "./Components/ServicesLine";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <HeadLine />
      <div className="px-3">
        <Header />
        <Hero />
        <About />
      </div>
      <ServicesLine />
      <Services />
    </div>
  );
}

export default App;
