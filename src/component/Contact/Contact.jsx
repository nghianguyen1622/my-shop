import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-img1 text-center pt-5">
        <h2 className=" text-center pt-5">
          Xin chào! Chúng tôi có thể giúp gì cho bạn?
        </h2>
      </section>
      <section className="bg0 p-t-104 p-b-116 ">
        <div className="container">
          <div className="row mt-5 pb-5">
          <div className="col-md-6 px-5 border form-m">
            {/* <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md"> */}
              <form>
                <h4 className=" text-center pt-5 pb-5">
                Gửi thắc mắc cho chúng tôi
                </h4>
                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="w-100 "
                    type="text"
                    name="email"
                    placeholder="    Email của bạn"
                  />
                </div>
                <div className="bor8 m-b-30">
                  <textarea rows="15"
                    className="w-100 mt-2"
                    name="msg"
                    placeholder="    Nội dung"
                  ></textarea>
                </div>
                <button className="btn w-100 h-100 mt-2 mb-5">
                  Gửi cho chúng tôi
                </button>
              </form>
            {/* </div> */}
            </div>
            <div className="col-md-6 px-5 border  ">
            <div className="align-self-center pt-5 ">

            {/* <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md"> */}
              <div className="flex-w w-full p-b-42 pt-5 mt-4">
                <div className="size-212 p-t-2 pt-5">
                  <div className="row">
                  <div className="col-sm-1">  <i class="fa fa-map-marker m-2" aria-hidden="true"></i></div>
                  <div className="col-sm-11"> 
                  <span className="fw-bold mb-2">Địa chỉ</span>
                  <p className="">
                  Quận 1, Hồ Chí Minh, Việt Nam
                  </p>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex-w w-full p-b-42">
                <div className="size-212 p-t-2">
                <div className="row">
                <div className="col-sm-1"> 
                <i class="fa fa-phone m-2" aria-hidden="true"></i></div>
                <div className="col-sm-11"> 
                  <span className="fw-bold mb-2">Số điện thoại</span>
                  <p className="stext-115 cl1 size-213 p-t-18">(+1) 96 716 6879</p>
                </div>
          </div>
          </div>
              <div className="flex-w w-full">
        
               
                <div className="size-212 p-t-2">
                <div className="row">
                <div className="col-sm-1"> 
                <i class="fa fa-envelope m-2" aria-hidden="true"></i></div>
                <div className="col-sm-11"> 
                  <span className="fw-bold  mb-2">Email hỗ trợ</span>
                  <p className="">
                    contact@example.com
                  </p>
                  </div>
                </div>
                </div>
              </div>
              </div>
            {/* </div> */}
          </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
