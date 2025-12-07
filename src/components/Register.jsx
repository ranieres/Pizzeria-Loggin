import { useState } from "react";

export default function Register() {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [type, setType] = useState(null);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !contraseña || !confirmPass) {
      setMensaje("Todos los campos son obligatorios.");
      setType("danger");
      return;
    }

    if (contraseña.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setType("danger");
      return;
    }

    if (contraseña !== confirmPass) {
      setMensaje("Las contraseñas no coinciden.");
      setType("danger");
      return;
    }

    setMensaje("Registro exitoso 🎉");
    setType("success");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4 shadow text-start" style={{ width: "400px" }}>
        <h2 className="mb-4 text-center">Registro</h2>

        {mensaje && (
          <div className={`alert alert-${type}`} 
          role="alert" 
          style={{ color: type === "success" ? "green" : "red" }}>
            {mensaje}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
}
