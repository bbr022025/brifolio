import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GridCard from "./components/GridCard";
import Footer from "./components/Footer.jsx";
import Cv from "./components/Cv.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <GridCard /> */}
    <Cv />
    <Footer />
  </StrictMode>
);
