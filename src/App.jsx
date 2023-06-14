import "./App.css";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import { routes } from "./routes/routes";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);
  return (
    <>
      <Routes>
        {routes.map(({ path, Element, id }) => (
          <Route path={path} key={id} element={<Element />} />
        ))}
        <Route
          path="*"
          element={<h1 style={{ color: "black" }}>404 NOT FOUND</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
