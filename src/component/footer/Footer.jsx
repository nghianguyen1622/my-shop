import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
       
              <ul >
              <h4 className="stext-301 cl0 p-b-30 pb-3">Dịch vụ khách hàng</h4>
                <li className="p-b-10 ">
                  <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                    Liên hệ với chúng tôi
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                    Hướng dẫn phân biệt hàng giả
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                    Dịch vụ trang điểm
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                    Tìm cửa hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
             
              <ul className="danhsach">
              <h4 className="stext-301 cl0 p-b-30 pb-3">Sản phẩm</h4>
                <li className="">
                  <a href="#/" className="cl7 hov-cl1 trans-04">
                    Son
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className=" cl7 hov-cl1 trans-04">
                    Phấn
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className=" cl7 hov-cl1 trans-04">
                    Kem nền
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#/" className="cl7 hov-cl1 trans-04">
                    Sản phẩm khác
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50 pt-4">
              <h4 className="stext-301 cl0 p-b-30">Địa chỉ</h4>
              <p className="stext-107 cl7 size-201 pt-3">
                Nếu có thắc mắc hãy đến cửa hàng của chúng tôi tại Quận 1, Hồ
                Chí Minh, Việt Nam hoặc có thể gọi vào số (+1) 96 716 6879
              </p>
              <div className="p-t-27">
                <a
                  href="#/"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16 m-2 text-white"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#/"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16 m-2 text-white"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="#/"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16 m-2 text-white"
                >
                  <i className="fa fa-pinterest-p"></i>
                </a>
              </div>
       
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50 pt-4">
              <h4 className="stext-301 cl0 p-b-30">Gửi phản hồi</h4>
              <form className="pt-3">
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>email@example.com</label>
                </div>
              </form>
              <button className="btn  " >
                  Gửi phản hồi
          </button>
            </div>
          </div>
          <div className="p-t-40 pt-5 ">
            <div className="flex-c-m flex-w p-b-18 d-flex justify-content-center pt-5 ">
              <a href="#/" className="m-all-1">
                <img
                  src="/assets/xicon-pay-01.png.pagespeed.ic.x3ksseq-Ro.jpg"
                  alt="ICON-PAY"
                />
              </a>
              <a href="#/" className="m-all-1">
                <img
                  src="/assets/xicon-pay-02.png.pagespeed.ic.VV76jih-LZ.jpg"
                  alt="ICON-PAY"
                />
              </a>
              <a href="#/" className="m-all-1">
                <img
                  src="/assets/xicon-pay-03.png.pagespeed.ic.qm10pI94h8.jpg"
                  alt="ICON-PAY"
                />
              </a>
              <a href="#/" className="m-all-1">
                <img
                  src="/assets/xicon-pay-04.png.pagespeed.ic.afX_pRP1xW.jpg"
                  alt="ICON-PAY"
                />
              </a>
              <a href="#/" className="m-all-1">
                <img
                  src="/assets/xicon-pay-05.png.pagespeed.ic.j9rtlz4R-L.jpg"
                  alt="ICON-PAY"
                />
              </a>
            </div>
            <span className="stext-107 cl6 txt-center d-flex justify-content-center pt-3 ">
              Bản quyền thuộc về&nbsp;
              <NavLink to="/" className="la">
                LA Shop&nbsp;
              </NavLink>{" "}
              trên toàn thế giới
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
