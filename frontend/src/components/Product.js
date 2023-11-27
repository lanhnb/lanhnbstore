
import FormatPrice from "./FormatPrice";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "./slices/cartSlice";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
const Product = (product) => {
    
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const handleAddToCart = (product) => {
    //     dispatch(addToCart(product));
    //     navigate("/cart")
    // }
    const { _id, name, image, price, priceOff, category, stock } = product;
    
    
    return (
        <>

            <div className="cart">

                <figure>
                    <NavLink to={`/singleproduct/${_id}`}>
                        <img src={image?.[0].url} alt={name} />
                        {price-priceOff>0 ? (<figcaption className="caption">Off:{((price-priceOff)/price*100).toFixed(2)}% </figcaption>):("")}
                        
                    </NavLink>
                </figure>

               
                    <div className="card-data-flex">
                        
                        <p className="name">{name} </p>
                        <p className="gia"><b>{<FormatPrice price={price} />}</b></p>

                    </div>
                    {/* <div className="btnC">
                    <button className="btn" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                    </div> */}
                </div>

           


        </>
    )
};
export default Product;





