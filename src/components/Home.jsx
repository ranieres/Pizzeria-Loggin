import Header from "./header";
import CardPizza from "./cardPizza";
// import {pizzas} from "../assets/js/pizzas";
import { useEffect, useState } from "react";

function Home() {

const [pizzas, setPizzas] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:5000/api/pizzas")
      .then((responde) => responde.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al obtener pizzas:", error));
  }, []); // se ejecuta solo una vez


  return (
    <div>
      <Header />

      <div className="pizzas-flex">
        
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
