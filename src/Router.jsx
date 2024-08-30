import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./commons/Navbar/Navbar.jsx";
import Footer from "./commons/Footer/Footer.jsx";

import HomeView from "../src/views/HomeView.jsx";
import QueHacemosView from "./views/QueHacemosView.jsx";
import ErrorView from "./views/ErrorView.jsx";
import NuestraMision from "./components/UserView/InformativePage/NuestraMision.jsx";
import OpcionBView from "./views/OpcionBView.jsx";
import OpcionCView from "./views/OpcionCView.jsx";

const Router = () => {
  
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route exact path="/home" element={<HomeView />} />
            <Route exact path="/hacemos" element={<QueHacemosView />} />
            <Route exact path="/mision" element={<NuestraMision />} />
            <Route exact path="/opcion-B" element={<OpcionBView />} />
            <Route exact path="/opcion-C" element={<OpcionCView/>} />
            <Route exact path="*" element={<ErrorView />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );
  };
  
  export default Router;