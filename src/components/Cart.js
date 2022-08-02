import React from "react";

import "./Cart.css";

const list = [
  {
    id: 1,
    cartImage:
      "https://i.pinimg.com/originals/ab/b7/1e/abb71eef3323d088fccfd27ac0ee44b2.jpg",
    name: "Alarm Clock",
    quantity: 5,
    price: 400000,
    promotion: {
      product_image:
        "https://i.pinimg.com/originals/0f/9e/1f/0f9e1f72e805262352b13a124100b723.jpg",
      name: "Lovely Go Yoon Jung",
      quantity: 1,
      price: 35000,
    },
  },

  {
    id: 1,
    cartImage:
      "https://i.pinimg.com/originals/b1/7b/10/b17b102f4272fb37cfd5ce6560ea82a9.jpg",
    name: "Alarm Clock",
    quantity: 5,
    price: 400000,
  },

  {
    id: 2,
    cartImage:
      "https://i.pinimg.com/originals/ab/b7/1e/abb71eef3323d088fccfd27ac0ee44b2.jpg",
    name: "Alarm Clock",
    quantity: 5,
    price: 400000,
    promotion: {
      product_image:
        "https://i.pinimg.com/originals/0f/9e/1f/0f9e1f72e805262352b13a124100b723.jpg",
      name: "Lovely Go Yoon Jung",
      quantity: 1,
      price: 35000,
    },
  },

  //   {
  //     id: 3,
  //     cartImage:
  //       "https://i.pinimg.com/originals/ab/b7/1e/abb71eef3323d088fccfd27ac0ee44b2.jpg",
  //     name: "Alarm Clock",
  //     quantity: 5,
  //     price: 400000,
  //     promotion: {
  //       product_image:
  //         "https://i.pinimg.com/originals/0f/9e/1f/0f9e1f72e805262352b13a124100b723.jpg",
  //       name: "Lovely Go Yoon Jung",
  //       quantity: 1,
  //       price: 35000,
  //     },
  //   },
];

export default function Cart() {
  return (
    <div className="mycart">
      <CartHeader />
      <div className="cartList">
        {list.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    </div>
  );
}

function CartHeader() {
  return (
    <div className="cartHeader">
      <div></div>
      <div></div>
      <div>
        <HeaderGrid>
          <div>Product</div>
          <div>Quantity</div>
          <div>Price</div>
        </HeaderGrid>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className="cartItem">
      <div className="cartDelete">delete</div>
      <div className="cartImages">
        <div className="cartImage">
          <img src={item.cartImage} />
        </div>
        {item.promotion && (
          <div className="promoText">
            GET
            <br />
            FREE
          </div>
        )}
      </div>
      <div className="grid">
        <ProductGrid>
          <div className="productName">{item.name}</div>
          <div className="productQty">{item.quantity}</div>
          <div className="productPrice">{item.price}</div>
        </ProductGrid>
        {item.promotion && (
          <PromoGrid>
            <div className="promoImage">
              <div className="promoProductImage">
                <img src={item.promotion.product_image} />
              </div>
              <div>{item.promotion.name}</div>
            </div>
            <div className="promoQty">{item.quantity}</div>
            <div className="promoPrice">{item.price}</div>
          </PromoGrid>
        )}
      </div>
    </div>
  );
}

function HeaderGrid({ children }) {
  return (
    <div>
      <CartGrid>{children}</CartGrid>
    </div>
  );
}

function ProductGrid({ children }) {
  return (
    <div
      style={{
        height: "var(--size-2)",
        marginBottom: "8px",
      }}
    >
      <CartGrid>{children}</CartGrid>
    </div>
  );
}

function PromoGrid({ children }) {
  return (
    <div
      style={{
        height: "var(--size-1)",
        border: "1px solid #EEEEEE",
      }}
    >
      <CartGrid>{children}</CartGrid>
    </div>
  );
}

function CartGrid({ children }) {
  return <div className="cartgrid">{children}</div>;
}
