import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Components/Contact/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
