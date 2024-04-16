import { Carousel } from "../components/Carousel";
import { TopBooks } from "../components/TopBooks";
import { Welcome } from "../components/Welcome";

export const HomePage = () => {
  return (
    <>
      <TopBooks />
      <Carousel />
      <Welcome />
    </>
  );
};
