import { useEffect, useState } from "react";

const KEY = "login-simple";

export default function LoginLocalStorage() {
   const [usuario, setUsuario] = useState("");
   const [password, setPassword] = useState("");
   const [guardado, setGuardado] = useState(null);

   // Leer al montar
   useEffect(() => {
      const raw = localStorage.getItem(KEY);
      if (raw) setGuardado(JSON.parse(raw));
   }, []);

   const guardar = (e) => {
      e.preventDefault();
      const data = { usuario, password };
      localStorage.setItem(KEY, JSON.stringify(data));
      setGuardado(data);
      setUsuario("");
      setPassword("");
   };

   const borrar = () => {
      localStorage.removeItem(KEY);
      setGuardado(null);
   };

   return (
      <div>
         <form onSubmit={guardar} className="row">
            <input
               className="input"
               placeholder="Usuario"
               value={usuario}
               onChange={(e) => setUsuario(e.target.value)}
               required
            />
            <input
               className="input"
               type="password"
               placeholder="Contraseña"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
            <button className="btn" type="submit">
               Guardar
            </button>
            <button className="btn sec" type="button" onClick={borrar}>
               Borrar
            </button>
         </form>

         <p style={{ marginTop: 8 }}>
            <b>Último guardado:</b>{" "}
            {guardado
               ? `${guardado.usuario} / ${guardado.password}`
               : "(sin datos)"}
         </p>
      </div>
   );
}
