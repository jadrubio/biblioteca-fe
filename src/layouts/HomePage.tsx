import { Carousel } from "../components/Carousel";
import { LibraryServices } from "../components/LibraryServices";
import { TopBooks } from "../components/TopBooks";
import { Welcome } from "../components/Welcome";

export const HomePage = () => {
  return (
    <>
      <TopBooks />
      <Carousel />
      <Welcome />
      <LibraryServices />
    </>
  );
};
