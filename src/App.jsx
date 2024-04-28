import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./LayOut";
import Home from "./components/Layout/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/event" element={""} />
          <Route path="/gallery" element={""} />
          <Route path="/about" element={""} />
          <Route path="/contact" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
