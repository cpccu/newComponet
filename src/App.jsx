import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./LayOut";
import Home from "./components/Layout/Home";
import Event from "./components/Layout/Event";
import ComingSoon from "./components/ComingSoon";
import { useEffect } from "react";

function ScrollToTop() {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Changed to index */}
          <Route path="event" element={<Event />} />
          <Route path="gallery" element={<ComingSoon />} />
          <Route path="about" element={<ComingSoon />} />
          <Route path="contact" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
