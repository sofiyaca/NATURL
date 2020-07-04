import React, { useState } from "react";
import "./productItem.scss";

import { Rate } from "antd";

import ProductColor from "../../components/product-details/product-colors";
import ProductTags from "../../components/product-details/product-tags";

function ProductItem(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleUpdateItemQuantity = (e) => {
    const quantityToInt = parseInt(e.target.value, 10);
    setItemQuantity(quantityToInt);
  };

  return (
    props.data !== undefined && (
      <>
        <div className="product-image-leftside-page">
          <div className="product-image-leftside-sizecontainer">
            <img alt="example" src={props.data.image_link} />
          </div>
        </div>

        <div className="product-details-rightside-page ">
          <div className="singleproduct-page-title">
            <h3>{props.data.name}</h3>
          </div>

          <div className="product-details-shopinfo">
            <h4>${props.data.price} </h4>
            <input
              className="product-details-quantity-input"
              type="number"
              name="discountInstant"
              min="1"
              max="10"
              placeholder="1"
              onChange={handleUpdateItemQuantity}
              autoComplete="off"
            ></input>
            <button
              onClick={() =>
                props.onAddToCartClick(props.data.id, itemQuantity)
              }
            >
              Add to cart
            </button>
          </div>

          <div className="singleproduct-page-description">
            <p>{props.data.description} </p>
          </div>

          {props.data.product_colors.map((item) => (
            <ProductColor key={item.hex_value} color={item.hex_value} />
          ))}

          <div className="product-details-categories-brand">
            <p>Brand: {props.data.brand} </p>
            <p>Product type: {props.data.product_type} </p>
            <p>Category: {props.data.category} </p>
            <span>
              Rating: <Rate disabled defaultValue={props.data.rating} />
            </span>
          </div>

          <ProductTags objItem={props.data} />
        </div>
      </>
    )
  );
}

export default ProductItem;
