const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="pizza-card">
      <img 
        src={img} 
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3 >{name}</h3>

      <p><strong>${price.toLocaleString("es-CL")}</strong></p>

      <p>
        <strong>Ingredientes:</strong><br />
         <ul className="ingredientes-lista">
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      </p>


      <div className="pizza-buttons">
        <button className="btn btn-outline-primary">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>

    </div>
  );
};

export default CardPizza;
