const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      margin: "10px"
    }}>
      
      <img 
        src={img} 
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3 style={{ marginTop: "10px" }}>{name}</h3>

      <p><strong>${price.toLocaleString("es-CL")}</strong></p>

      <p>
        <strong>Ingredientes:</strong><br />
        {ingredients.join(", ")}
      </p>


      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button className="btn btn-outline-primary">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>

    </div>
  );
};

export default CardPizza;
