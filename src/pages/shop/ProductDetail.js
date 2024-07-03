import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import "./showProduct.css";

const ProductDetail = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const product = PRODUCTS.find((product) => product.id === 6);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const { productName, artName, price, productImage, artDescription } = product;
  const cartItemCount = cartItems[product.id] || 0;

  return (
    <div className="product-detail">
      <h2 className="shopTitle">{productName}</h2>
      <div className="detail-container">
        <div className="description-container">
          <p className="description">{artName}</p>
          <p className="description">Price: €{price}</p>
          <p className="description artDescription">{artDescription}</p>
          <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
            Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
        <img
          src={productImage}
          alt={productName}
          className="centered-image"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
