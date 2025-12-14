const Navbar = () => {
  const total = 19190;
  const token = false;

  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" , backgroundColor: "black",
        color: "white",}}>
          <p>Pizzeria Mamma Mía</p>
      <button className="btn bbtn btn-outline-secondary">🍕 Home</button>
      <button className="btn btn-outline-secondary">🔓 Profile</button>
      <button className="btn btn-outline-secondary" >🔒 Logout</button>
      <button className="btn btn-outline-secondary">🔐 Login</button>
      <button className="btn btn-outline-secondary">🔐 Register</button>

      <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
        🛒 Total: ${total.toLocaleString("es-CL")}
      </span>
    </nav>
  );
};

export default Navbar;
