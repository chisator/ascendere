import "./App.css";
import { Routes, Route } from "react-router-dom";

import { routes } from "./routes/routes";
import { ServicioCarouselContextProvider } from "./context/servicioCarouselContext";

function App() {
  return (
    <>
      <ServicioCarouselContextProvider>
        <Routes>
          {routes.map(({ path, Element, id }) => (
            <Route path={path} key={id} element={<Element />} />
          ))}
          <Route
            path="*"
            element={<h1 style={{ color: "black" }}>404 NOT FOUND</h1>}
          />
        </Routes>
      </ServicioCarouselContextProvider>
    </>
  );
}

export default App;
