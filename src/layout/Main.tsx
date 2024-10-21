import Footer from "@/pages/shared/Footer/Footer";
import Navbar from "@/pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-emerald-200 to-100%">
      {noHeaderFooter || <Navbar></Navbar>}
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
