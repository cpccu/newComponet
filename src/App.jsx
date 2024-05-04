import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./LayOut";
import Home from "./components/Layout/Home";
import ComingSoon from "./components/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/event" element={<ComingSoon />} />
          <Route path="/gallery" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
