import "./App.css";
import FiltroEnVivo from "./components/FiltroEnVivo";
import ToggleFondo from "./components/ToggleFondo";
import LoginLocalStorage from "./components/LoginLocalStorage";
import Carrito from "./components/Carrito";
import Tareas from "./components/Tareas";

function App() {
   return (
      <div className="pagina">
         <h1>Ejercicios React</h1>

         <section className="card">
            <h2>1) Filtro en vivo</h2>
            <FiltroEnVivo />
         </section>

         <section className="card">
            <h2>2) Toggle automático de fondo</h2>
            <ToggleFondo />
         </section>

         <section className="card">
            <h2>3) Formulario con LocalStorage</h2>
            <LoginLocalStorage />
         </section>

         <section className="card">
            <h2>4) Carrito simple</h2>
            <Carrito />
         </section>

         <section className="card">
            <h2>5) Listado de tareas</h2>
            <Tareas />
         </section>
      </div>
   );
}

export default App;
