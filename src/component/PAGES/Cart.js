import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increment, decrement } from "../STORE/CartSlice";
import { motion, Variants } from "framer-motion";

const Cart = () => {
  let Animation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
      },
    },
  };
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemID) => {
    dispatch(remove(itemID));
  };

  let INCREMENT = (itemID) => {
    dispatch(increment(itemID));
  };

  let DECREMENT = (itemID) => {
    dispatch(decrement(itemID));
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 260px 260px 260px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 25,
        }}
      >
        {names.length === 0 ? (
          <motion.h1 initial="hidden"
          animate="show"
          variants={Animation}
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              fontSize: 45,
              marginTop: 45,
            }}
          >
            No items in cart
          </motion.h1>
        ) : (
          " "
        )}
        {names.map((item) => {
          let update = item.price * item.quantity;
          return (
            <>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div className="card" style={{ width: "18rem" }}>
                  <h3 className="card-title">{item.id}</h3>
                  <img
                    src={item.thumbnail}
                    class="card-img-top"
                    alt="..."
                    style={{ height: 150, width: 255 }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ height: 70 }}>
                      {item.title}
                    </h5>
                    <h5 className="card-text">{update}</h5>
                    <h5 className="card-text">{item.quantity}</h5>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => INCREMENT(item.id)}
                    >
                      +
                    </a>

                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{ marginLeft: 8 }}
                      onClick={() => DECREMENT(item.id)}
                    >
                      -
                    </a>
                    <br />
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => REMOVE(item.id)}
                      style={{ marginTop: 5 }}
                    >
                      RemovedToCart
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
