import { NavLink, useLocation } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { SiAddthis } from 'react-icons/si';
import { FiUsers } from 'react-icons/fi';
import Logo from '../../../../assets/icon.png';
import './Nav.css';

const Nav = () => {
  const location = useLocation();
  window.electron.log.info(location);
  return (
    <nav className="navbar navbar-expand fixed-top p-0 m-0">
      <div className="container-fluid">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          title="Library System"
        >
          <img src={Logo} alt="lol" width="30" height="24" />
        </NavLink>
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            aria-current="page"
            title="Books"
            to="/books"
          >
            <ImBooks size="2rem" />
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            aria-current="page"
            title="Users"
            to="/users"
          >
            <FiUsers size="2rem" />
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            aria-current="page"
            title="Issues"
            to="/issues"
          >
            <SiAddthis size="2rem" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
