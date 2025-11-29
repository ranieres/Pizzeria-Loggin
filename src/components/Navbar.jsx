const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" , backgroundColor: "black",
        color: "white",}}>
          <p>Pizzeria Mamma Mía</p>
      <button className="btn btn-primary navbar-button">🍕 Home</button>
      <button className="btn btn-secondary navbar-button">🔓 Profile</button>
      <button className="btn btn-danger navbar-button" >🔒 Logout</button>
      <button className="btn btn-success navbar-button">🔐 Login</button>
      <button className="btn btn-warning navbar-button">🔐 Register</button>

      <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
        🛒 Total: ${total.toLocaleString("es-CL")}
      </span>
    </nav>
  );
};

export default Navbar;
