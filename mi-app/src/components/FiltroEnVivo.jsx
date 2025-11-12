import { useState } from "react";

const DATOS = [
   "Helado de chocolate",
   "Pizza napolitana",
   "Empanadas",
   "Milanesa",
   "Pastas",
   "Hamburguesa",
   "Sushi",
   "Tacos",
];

export default function FiltroEnVivo() {
   const [q, setQ] = useState("");

   const filtrados = DATOS.filter((item) =>
      item.toLowerCase().includes(q.toLowerCase())
   );

   return (
      <div>
         <input
            className="input"
            type="text"
            placeholder="Filtrar por nombre..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
         />
         <ul>
            {filtrados.map((it, i) => (
               <li key={i}>{it}</li>
            ))}
            {filtrados.length === 0 && (
               <em>Sin resultados</em>
            )}
         </ul>
      </div>
   );
}
