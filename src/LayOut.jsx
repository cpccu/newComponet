import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}
