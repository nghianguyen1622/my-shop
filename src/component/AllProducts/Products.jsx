import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {NavLink} from "react-router-dom";
import Data from '../../Data';
import {useDispatch } from 'react-redux';
import {addItem, delItem} from '../../redux/action/index';
 
const Products =() => {
  const [data, setData] = useState(Data);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;


  const dispatch = useDispatch();
  const handleCart = (product) => {
 
      dispatch(addItem(product))
  }


  const Loading = () => {
    return( <>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    </>);
  };
  const setProductt = (cat)=>{
    const updateList = Data.filter(x=>x.category == cat);
    setFilter(updateList);
  }
  const ShowProducts = () => {
    return (
      <>
<div className="buttons d-flex justify-content-center">
  <div className="btn btn-outline-dark me-2" onClick={()=>setFilter(Data)}>Tất cả</div>
  <div className="btn btn-outline-dark me-2" onClick={()=>setProductt(1)}>Son</div>
  <div className="btn btn-outline-dark me-2" onClick={()=>setProductt(2)}>Phấn</div>
  <div className="btn btn-outline-dark me-2" onClick={()=>setProductt(3)}>Kem nền</div>
  <div className="btn btn-outline-dark me-2" onClick={()=>setProductt(4)}>Nước tẩy trang</div>
</div>
        {filter.map((product) => {
          return (
      
            <div className="col-md-3 mb-5 mt-4 pt-4">
              <div className="sp">
              <div className="card text-center p-2 " key={product.id} style={{height:"120%"}}>
                <img src={product.img} className="card-img-top" alt={product.title} height="300px" />
                <div className="card-body btn-quick-button">
                <div className="quick_button ">
                  <NavLink to= {`/products/${product.id}`} className="btn m-2" title="Chi tiết sản phẩm">
                  Xem sản phẩm
                  </NavLink>
                  
                  <button className="btn fa fa-cart-arrow-down" title="Thêm vào giỏ hàng " onClick={()=> handleCart(product)}>
                  </button>
                  
                  </div>
                  </div>

                <div className="card-body">
                
                  <p className="card-title fw-bold mb-0">{product.title}</p>
                  <p className="card-text   mt-2 " >
                  {product.price}.000 đ
                  </p>
              
                </div>
              </div>
              </div>
            </div>
            
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container ct-mg ">
        <div className="row ">
          {/* <div className="col-12 mb-3">
            <h1 className="display-6 fw-bolder text-center ">s
            SẢN PHẨM BÁN CHẠY
            </h1>
            <hr />
          </div> */}
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
