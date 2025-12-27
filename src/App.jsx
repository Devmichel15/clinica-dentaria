import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HeadLine from "./Components/HeadLine";

function App() {
  return (
    <div>
      <HeadLine />
      <div className="px-3">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
