import { Outlet } from "react-router-dom";
import Header from "./components/Global/Header/Header";
import NavBar from "./components/Global/NavBar/NavBar";
import Footer from "./components/Global/Footer/Footer";

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
