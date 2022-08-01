import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {useDispatch } from 'react-redux';
import {addItem, delItem} from '../../redux/action/index';
import Data from '../../Data';

const Product = () => {
  const [cartBtn, setCartBtn] = useState("Thêm vào giỏ hàng")
  const proid = useParams();
  const proDetail = Data.filter(x=>x.id == proid.id);
  const product = proDetail[0];
  console.log(product);


  // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleCart = (product) => {
    if(cartBtn === "Thêm vào giỏ hàng"){
      dispatch(addItem(product))
      setCartBtn("Xóa sản phẩm khỏi giỏ hàng")
    }else{
      dispatch(delItem(product))
      setCartBtn("Thêm vào giỏ hàng")
    }
    // dispatch(addCart(product));
  }

  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true);
  //     const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     setProduct(await reponse.json());
  //     setLoading(false);
  //   };
  //   getProduct();
  // }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}} />

        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6 pt-5">
          <img className=""
            src={product.img}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 nut pt-5">
          {/* <h4 className="text-uppercase text-black-50">{product.category}</h4> */}
          <h1 className="display-5">{product.title}</h1>
          <hr/>
          <h3 className="display-6 fw-bold my-4">{product.price}.000 đ</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2 my-4" onClick={()=> handleCart(product)}>
            {cartBtn}
          </button>
          <NavLink to="/cart" className="btn ms-2 px-3 py-2 my-4 hi text-white" style={{background : "#507fcf"}}>
            Đi tới giỏ hàng
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 pt-5 ">
        <div className="row py-4 pt-5 ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;
