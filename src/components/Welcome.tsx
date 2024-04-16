export const Welcome = () => {
  return (
    <>
      {/* Desktop */}
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                Let us know what is on your reading list! Whether it is horro,
                fantasy, non-fiction, we would love to know!
              </p>
              <a href="#" className="btn btn-lg main-color text-white">
                Sign Up!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
          <div className="ml-2">
            <h1>See whats new!</h1>
            <p className="lead">
              Try to check in daily as we are always adding new books to our
              collection. With your feedback we try to make sure we have
              something for everyone! Your voice is important and our book
              selection reflects on what our readers are looking for!
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="col-image-right"></div>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                Let us know what is on your reading list! Whether it is horro,
                fantasy, non-fiction, we would love to know!
              </p>
              <a href="#" className="btn btn-lg main-color text-white">
                Sign Up!
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>See whats new!</h1>
              <p className="lead">
                Try to check in daily as we are always adding new books to our
                collection. With your feedback we try to make sure we have
                something for everyone! Your voice is important and our book
                selection reflects on what our readers are looking for!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
