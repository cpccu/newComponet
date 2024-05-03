import { Outlet } from "react-router-dom";
import Header from "./components/Global/Header/Header";
import NavBar from "./components/Global/NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}
