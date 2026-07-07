import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import TShirts from "./pages/TShirts";
import TrackPants from "./pages/TrackPants";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/tshirts" element={<TShirts />} />
        <Route path="/track-pants" element={<TrackPants />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
