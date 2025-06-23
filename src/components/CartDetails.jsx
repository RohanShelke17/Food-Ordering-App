import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { store } from "../redux/app/store";
import { addToCart ,removeToCart ,decrement ,removeAllCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const CartDetails = () => {
  const {carts}=useSelector((state)=>state.allCart);

  const [totalprice,setPrice]= useState(0);
  const [totalQty,setQty]= useState(0);


  const dispatch=useDispatch();

  //Increment
  const handleIncrement= (e)=>{
    dispatch(addToCart(e));
  }

  // Remove from cart
  const handleRemove= (id) => {
    dispatch(removeToCart(id));
    toast.success("Item Removed From Your Cart")

  }

  // Decrement
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  }
  
  // Remove All

  const removeAll=()=>{
    dispatch(removeAllCart());
    toast.success("Your Cart is Empty")

  }

  // count total price
  const total = ()=> {
    let totalprice=0
    let totalQty=0
    carts.map((ele,index)=>{
      totalprice =ele.price*ele.qnty + totalprice;
      totalQty+=ele.qnty;
    });
    setPrice(totalprice);
    setQty(totalQty);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5 cardsdetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">Cart Calculation { carts.length>0? `(${carts.length})`:""}</h5>
              {carts.length > 0 ? (
                <button className="btn btn-danger mt-0 btn-small" onClick={()=>removeAll()}>
                  <i className="fa-solid fa-trash"></i>
                  <span></span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-body p-0">
            {
              carts.length === 0 ? <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> : <table className="table cart-table mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right"><span id="amount " className="amount">Total Amount</span></th>

                  </tr>
                </thead>
                <tbody>
                  {
                    carts.map((data,index)=>{
                      return (
                        <>
                        <tr>
                          <td>
                            <button className="prdct-delete" onClick={()=>handleRemove(data.id)}><i className="fa-solid fa-trash" ></i></button>
                          </td>
                          <td>
                            <div className="product-img"><img src={data.imgdata} alt="" /></div>
                          </td>
                          <td>
                            <div className="product-name"><p>{data.dish}</p></div>
                          </td>
                          <td>{data.price}</td>
                          <td>
                            <div className="prdct-qty-container">
                              <button className="prdct-qty-btn" type="button" onClick={()=>handleDecrement(data.id)}>
                                <i className="fa fa-minus"></i>
                              </button>
                              <input type="text" className="qty-input-box" value={data.qnty} disabled/>
                              <button
                              className="prdct-qty-btn"
                              type="button" onClick={()=>handleIncrement(data)}>
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="text-right">{data.price*data.qnty}</td>
                        </tr>
                        </>
                      )
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th >Items In Cart <span className="ml-2 mr-2">:</span><span className="text-danger">{totalQty}</span></th>
                    <th className="text-right">Total Price <span className="ml-2 mr-2">:</span><span className="text-danger">{totalprice}</span></th>
                  </tr>
                </tfoot>
              </table>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
