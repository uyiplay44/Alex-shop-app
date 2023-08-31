import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./Components/general";
import { Home } from "./pages";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-section">
        <Routes>
          <Route path="/" extact element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
