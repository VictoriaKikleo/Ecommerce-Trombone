// Product.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import Image from 'react-bootstrap/Image';

export const Product = (props) => {
  const { id, productName, artName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ cursor: 'pointer' }}>
          <Image src={productImage} rounded style={{ width: "300px", height: "330px" }} />
          <div className="description">
            <p>
              <b>{productName}</b>
              <br />
              <b>{artName}</b>
            </p>
            <p> €{price}</p>
          </div>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
