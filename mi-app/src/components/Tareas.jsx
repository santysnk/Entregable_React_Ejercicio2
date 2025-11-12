import { useState } from "react";

const PRE = [
   { id: 1, titulo: "Comprar pan", hecho: false },
   { id: 2, titulo: "Estudiar React", hecho: true },
   { id: 3, titulo: "Sacar al perro", hecho: false },
];

export default function Tareas() {
   const [tareas, setTareas] = useState(PRE);
   const [texto, setTexto] = useState("");

   const agregar = (e) => {
      e.preventDefault();
      if (!texto.trim()) return;
      setTareas((t) => [
         ...t,
         { id: crypto.randomUUID(), titulo: texto.trim(), hecho: false },
      ]);
      setTexto("");
   };

   const eliminar = (id) => setTareas((t) => t.filter((x) => x.id !== id));
   const toggleHecho = (id) =>
      setTareas((t) =>
         t.map((x) => (x.id === id ? { ...x, hecho: !x.hecho } : x))
      );

   return (
      <div>
         <form onSubmit={agregar} className="row">
            <input
               className="input"
               placeholder="Nueva tarea..."
               value={texto}
               onChange={(e) => setTexto(e.target.value)}
            />
            <button className="btn" type="submit">
               Agregar
            </button>
         </form>

         <table className="table" style={{ marginTop: 8 }}>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Tarea</th>
                  <th>Estado</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {tareas.map((t, i) => (
                  <tr key={t.id}>
                     <td>{i + 1}</td>
                     <td
                        style={{
                           textDecoration: t.hecho ? "line-through" : "none",
                        }}
                     >
                        {t.titulo}
                     </td>
                     <td>{t.hecho ? "Hecha" : "Pendiente"}</td>
                     <td className="row">
                        <button
                           className="btn sec"
                           onClick={() => toggleHecho(t.id)}
                           type="button"
                        >
                           {t.hecho ? "Desmarcar" : "Marcar"}
                        </button>
                        <button
                           className="btn danger"
                           onClick={() => eliminar(t.id)}
                           type="button"
                        >
                           Eliminar
                        </button>
                     </td>
                  </tr>
               ))}
               {tareas.length === 0 && (
                  <tr>
                     <td
                        colSpan="4"
                        style={{ textAlign: "center", opacity: 0.7 }}
                     >
                        Sin tareas
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
}
