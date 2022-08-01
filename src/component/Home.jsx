import React from "react";
import Products from "./AllProducts/Products";

function Home(props) {
  return (
    <div className="hero pt-5">
      <div className="card  text-white border-0 ">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="650px"
      
        />
      {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
          </div>
        </div> */}

      </div>

      
      <div className="container my-5 ">
        {/* <div className="row"> */}
          <div className="col-12 mb-3">
            <h1 className="display-6 fw-bolder text-center ">
            SẢN PHẨM BÁN CHẠY
            </h1>
            <hr className="underline text-center" />
          {/* </div> */}
        </div>
    
     
      <Products />
      </div>
    </div>
  );
}

export default Home;
