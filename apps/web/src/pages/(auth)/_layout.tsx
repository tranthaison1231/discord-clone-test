import OrgSideBar from "@/components/OrgSideBar";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const ORGS = [
    {
      id: "1",
      icon: "https://tse1.mm.bing.net/th?id=OIP.I9-0Sp_W08VSbGZFurppfgHaFj&pid=Api&rs=1&c=1&qlt=95&w=145&h=109",
      name: "lenovo",
    },
    {
      id: "2",
      icon: "https://tse1.mm.bing.net/th?id=OIP.I9-0Sp_W08VSbGZFurppfgHaFj&pid=Api&rs=1&c=1&qlt=95&w=145&h=109",
      name: "lenovo",
    },
  ];
  useEffect(() => {
    document.documentElement.classList.add("dark");
    // if (location.pathname === "/") {
    //   navigate(`/orgs/${ORGS[0]?.id}`);
    // }
  }, [navigate, location]);
  return (
    <div className="flex text- bg-background h-screen w-screen">
      <OrgSideBar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
