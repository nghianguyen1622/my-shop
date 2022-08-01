import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../../redux/action/index";
import { addItem } from "../../redux/action/index";
import {NavLink} from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handClose = (item) => {
    dispatch(delItem(item));
  };

  const handleCart = (product) => {
    dispatch(addItem(product));
  };
  const cartItems = (cartItem) => {
    return (
      <>
        <hr />
        
        <div className="col-sm-4">
          <img
            className="img-fluid"
            src={cartItem.img}
            alt={cartItem.title}
            width="170px"
          />
        </div>
        <div className="col-sm-4 align-self-center">
          <p className="">{cartItem.title}</p>
          <p className="my-4">x{cartItem.qty}</p>
          <p className="my-4">{cartItem.price * cartItem.qty}.000 đ</p>
        </div>
        <div className="col-sm-4">
          <div className="row offset-md-4">
            <div className="removeCart row m-3 "
             
                onClick={() => handClose(cartItem)}>
              
                <i class="fa fa-times"></i>
              
            </div>

            <div className="row m-3 pt-5 cartControl">
            <button
                className="btn btn-outline-dark m-1 h-75 w-25"
                onClick={() => handClose(cartItem)}
              >
                <i class="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark m-1 h-75 w-25"
                onClick={() => handleCart(cartItem)}
              >
                <i class="fa fa-plus"></i>
              </button>
      
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      
        <div className="py-4 shadow p-4 bg-white rounded ">
          <h3>Giỏ hàng trống</h3>
          <NavLink to="/products"  style={{textDecoration:"none"}}>
               
                <button className="btn ms-2 px-3 my-2 btn-outline-dark" >Mua sắm </button>
             
              </NavLink>
        </div>
      
    );
  };

  const totalPrice = state.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <div className="container pt-5 ">
        <div className="row mt-5">
          <div className="col-12 ">
            {/* <h1 className=" fw-bolder text-center ">Giỏ hàng của bạn</h1>
            <hr /> */}
          </div>
        </div>
        <div className="row mt-5">
          
          <div className="col-md-8 px-5">
            <div>
            <div className="row  p-3 mb-5 bg-white rounded">
              {state.length === 0 && emptyCart()}

              {state.length !== 0 && state.map(cartItems)}
              </div>
            </div>
          
          </div>
          <div className="col-md-4">
          <div className="shadow p-5 mb-5 bg-white rounded ">
            <div className="row">
              <div className="col-sm-8">
                <h1>Giỏ hàng</h1>
                <p>Tổng tiền:</p>
              </div>
              <div className="col-sm-4 mt-5">
                <p>{totalPrice}.000 đ</p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cart;
