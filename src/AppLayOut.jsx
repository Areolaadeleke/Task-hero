import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import { useState } from "react";

function AppLayOut({ token }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="applayout">
      <Header token={token} setIsOpen={setIsOpen} isOpen={isOpen} />
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />

      <main className="main">
        <div className="outlinecontainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayOut;
