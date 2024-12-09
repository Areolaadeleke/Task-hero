import { HiBookOpen, HiUser, HiViewBoards } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <div className="good">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              <HiViewBoards />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" className="nav-link">
              <HiUser />
              User
            </NavLink>
          </li>
          <li>
            <NavLink to="/task" className="nav-link">
              <HiBookOpen />
              Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/detailstask" className="nav-link">
              <HiBookOpen />
              DetailsTask
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting" className="nav-link">
              <HiOutlineCog6Tooth />
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
