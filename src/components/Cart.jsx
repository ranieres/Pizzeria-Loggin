import React from 'react'
import { useState } from 'react';
import { pizzaCart  as inicialCart} from '../assets/js/pizzas'

const Cart = () => {
    const [cart, setCart] =useState(inicialCart);

    // Aumentar cantidad
  const handleIncrementar = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Disminuir cantidad y eliminar si llega a 0
  const handleDisminuir = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Calcular total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );


  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            padding: "10px 0"
          }}
        >
          <img 
            src={item.img} 
            alt={item.name}
            style={{ width: "60px", borderRadius: "8px" }}
          />

           <span>{item.name}</span>

          <span>${item.price.toLocaleString("es-CL")}</span>


<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDisminuir(item.id)}
              >
                -
              </button>

              <span>{item.count}</span>

              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => handleIncrementar(item.id)}
              >
                +
              </button>
        
        </div>
          </div>
        ))
      )}
    
       <h3 style={{ marginTop: "20px" }}>
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      {/* Botón pagar */}
      <button className="btn btn-dark w-100 mt-3">
        Pagar 💳
      </button>
    </div>
  );
}

export default Cart