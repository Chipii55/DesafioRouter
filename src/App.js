import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nave from "./componentes/Nave.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Nave></Nave>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

