import { Button } from "./UI/Button";

export const BookDisplay = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../images/book/new-book-1.png")}
          width="305"
          height="311"
          alt="book"
        />
        <h6 className="mt-2">Book</h6>
        <p>Basic Comic Book</p>
        <Button>Reserve</Button>
      </div>
    </div>
  );
};
