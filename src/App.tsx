import { Navbar } from "./layouts/Navbar";
import { TopBooks } from "./components/TopBooks";
import { Carousel } from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <TopBooks />
      <Carousel />
    </>
  );
}

export default App;
