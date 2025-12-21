import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
 

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) =>
        console.error("Error al obtener la pizza:", error)
      );
  }, []);

    if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }


  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "700px" }}>
        <div className="row g-0">
          
          <div className="col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid h-100"/>
          </div>
          
          <div className="col-md-6 p-4 text-start">
            <h2 className="text-capitalize">{pizza.name}</h2>

            <p className="text-muted">{pizza.desc}</p>

            <h5>Ingredientes:</h5>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}> {ingredient}</li>
              ))}
            </ul>

            <h4 className="mt-3">
              Precio: ${pizza.price.toLocaleString("es-CL")}
            </h4>

            <button className="btn btn-success mt-3 w-100">Añadir al Carro</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pizza;