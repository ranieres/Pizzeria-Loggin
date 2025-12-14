import Header from "./header";
import CardPizza from "./cardPizza";
import {pizzas} from "../assets/js/pizzas";

function Home() {
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
