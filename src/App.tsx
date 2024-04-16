import { Navbar } from "./layouts/Navbar";
import { TopBooks } from "./components/TopBooks";
import { Carousel } from "./components/Carousel";
import "./App.css";
import { HomePage } from "./layouts/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
