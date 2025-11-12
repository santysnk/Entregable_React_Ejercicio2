import { useEffect, useRef, useState } from "react";

export default function ToggleFondo() {
   const [encendido, setEncendido] = useState(false);
   const rootRef = useRef(null);

   useEffect(() => {
      const card = rootRef.current?.closest(".card");
      if (!card) return;

      if (encendido) {
         card.classList.add("dark-card");
      } else {
         card.classList.remove("dark-card");
      }
   }, [encendido]);

   return (
      <div ref={rootRef} className="row">
         <span>
            Luz: <b>{encendido ? "ON" : "OFF"}</b>
         </span>
         <button className="btn" onClick={() => setEncendido((v) => !v)}>
            Cambiar
         </button>
         <span className="badge">
            {encendido ? "Modo oscuro" : "Modo claro"}
         </span>
      </div>
   );
}
