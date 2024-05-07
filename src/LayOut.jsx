import { Outlet } from "react-router-dom";
import Header from "./components/Global/Header";
import NavBar from "./components/Global/NavBar";
import Footer from "./components/Global/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
