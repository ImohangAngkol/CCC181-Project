import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Organs from "./pages/Organs/Organs.jsx";
import Parts from "./pages/Parts/Parts.jsx";
import Login from "./pages/Login/Login.jsx";
import Developer from "./pages/Developer/Developer.jsx";
import "./styles/globals.css";
import "./styles/theme.css";

/**
 * App sets up global layout and client-side routing.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organs" element={<Organs />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <main className="container">
      <section className="card">
        <h2>Page not found</h2>
        <p className="muted">The page you’re looking for doesn’t exist.</p>
      </section>
    </main>
  );
}
