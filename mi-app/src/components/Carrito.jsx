import { useMemo, useState } from "react";

const CATALOGO = [
   { id: 1, nombre: "Café", precio: 1200 },
   { id: 2, nombre: "Té", precio: 900 },
   { id: 3, nombre: "Mate", precio: 1500 },
   { id: 4, nombre: "Jugo", precio: 800 },
];

export default function Carrito() {
   const [carrito, setCarrito] = useState([]); // [{id, nombre, precio, cantidad}]

   const agregar = (p) => {
      setCarrito((c) => {
         const existe = c.find((x) => x.id === p.id);
         if (existe) {
            return c.map((x) =>
               x.id === p.id ? { ...x, cantidad: x.cantidad + 1 } : x
            );
         }
         return [...c, { ...p, cantidad: 1 }];
      });
   };

   const quitar = (id) => {
      setCarrito((c) =>
         c
            .map((x) => (x.id === id ? { ...x, cantidad: x.cantidad - 1 } : x))
            .filter((x) => x.cantidad > 0)
      );
   };

   const total = useMemo(
      () => carrito.reduce((acc, x) => acc + x.precio * x.cantidad, 0),
      [carrito]
   );

   return (
      <div className="row" style={{ alignItems: "flex-start" }}>
         <div style={{ flex: 1, minWidth: 260 }}>
            <h3>Productos</h3>
            <ul className="listado-productos">
               {CATALOGO.map((p) => (
                  <li key={p.id} className="producto-item">
                     <div className="producto-info">
                        <span className="producto-nombre">{p.nombre}</span>
                        <span className="precio-badge">${p.precio}</span>
                     </div>

                     <button
                        className="btn agregar-btn"
                        onClick={() => agregar(p)}
                     >
                        Agregar
                     </button>
                  </li>
               ))}
            </ul>
         </div>

         <div style={{ flex: 1, minWidth: 300 }}>
            <h3>Carrito</h3>
            <table className="table">
               <thead>
                  <tr>
                     <th>Producto</th>
                     <th>Cant.</th>
                     <th>Precio</th>
                     <th>Subtotal</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {carrito.map((x) => (
                     <tr key={x.id}>
                        <td>{x.nombre}</td>
                        <td>{x.cantidad}</td>
                        <td>${x.precio}</td>
                        <td>${x.precio * x.cantidad}</td>
                        <td>
                           <button
                              className="btn danger"
                              onClick={() => quitar(x.id)}
                           >
                              Quitar
                           </button>
                        </td>
                     </tr>
                  ))}
                  {carrito.length === 0 && (
                     <tr>
                        <td
                           colSpan="5"
                           style={{ textAlign: "center", opacity: 0.7 }}
                        >
                           Vacío
                        </td>
                     </tr>
                  )}
               </tbody>
               <tfoot>
                  <tr>
                     <td colSpan="3" style={{ textAlign: "right" }}>
                        <b>Total</b>
                     </td>
                     <td colSpan="2">
                        <b>${total}</b>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
}
