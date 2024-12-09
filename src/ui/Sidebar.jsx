import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
