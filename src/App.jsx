console.log("TEST:", import.meta.env.VITE_TEST_VAR);

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/AboutUsPage";
import Service1 from "./pages/Service1Page";
import Service2 from "./pages/Service2Page";
import Service3 from "./pages/Service3Page";
import Service4 from "./pages/Service4Page";
import Contact from "./pages/ContactPage";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* UPDATED SERVICE ROUTES */}
        <Route
          path="/display-panel-repairing"
          element={<Service1 />}
        />

        <Route
          path="/panel-bonding-acf-cof-tab"
          element={<Service2 />}
        />

        <Route
          path="/motherboard-repairs"
          element={<Service3 />}
        />

        <Route
          path="/backlight-repair"
          element={<Service4 />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <CallButton />

    </>
  );
}

export default App;
