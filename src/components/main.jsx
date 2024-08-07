import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          {/* <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          /> */}
          <img height={500} src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww" alt="" />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title fs-1 text fw-lighter text-center fw-bold">Trending New Items Arrives</h1>
              <h5 className="card-title fs-1 text fw-lighter text-center">Lowest Price Best Quality</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
