import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const state = useSelector((state) => state.addItem);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white p-2 shadow-sm">
        <div className="container ">
          <img
            src="/assets/logo.png"
            className="img-fluid "
            width="50px"
            alt="Background"
          />
          <NavLink className="navbar-brand fw-bold fs-4 m-2" to="/">
            <span style={{ color: "#507fcf" }}>LA</span> SHOP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
              <li className="nav-item fw-bold m-2">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact={true}
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item fw-bold m-2 dropdown">
                <NavLink className="nav-link" to="/products">
                  Sản phẩm
                </NavLink>
              </li>

              <li className="nav-item fw-bold m-2">
                <NavLink className="nav-link" to="/about">
                  Giới thiệu
                </NavLink>
              </li>
              <li className="nav-item fw-bold m-2">
                <NavLink className="nav-link" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              <NavLink
                to="/login"
                className="m-2"
                title="Tìm kiếm"
                style={{ fontSize: "18px" }}
              >
                <i class="fa fa-search me-1 text-dark "></i>
              </NavLink>
              {/* ms-2 là cách ra giữa các ô */}
              <div class="btn-group"></div>
              <NavLink
                to="/register"
                className=" ms-2 m-2"
                title="Đăng ký"
                style={{ fontSize: "20px" }}
              >
                <i class="fa fa-user me-1 text-dark"></i>
              </NavLink>
              <NavLink
                to="/cart"
                className=" ms-2 text-dark"
                title="Giỏ hàng "
                style={{ textDecoration: "none", fontSize: "20px" }}
              >
                <i class="fa fa-shopping-cart me-1 text-dark"></i>
                <span class="number" id="NoOfItemsInCart">
                  {" "}
                  {state.length}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
