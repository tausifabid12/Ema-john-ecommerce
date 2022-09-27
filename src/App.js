import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";

function App() {
  return (
    <div className="app">
      <div className="body">
        <header>
          <Navbar></Navbar>
          <Hero></Hero>
        </header>
        <main>
          <Products></Products>
        </main>
      </div>
    </div>
  );
}

export default App;
