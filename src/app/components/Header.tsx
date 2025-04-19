import { Link } from "react-router-dom";
import { navigation } from "../navigation";
import { Navigation } from "../types";

function Header() {
  return <nav>
    <ul>
      {navigation.map((link: Navigation) => (
        <li key={link.path}>
          <Link to={link.path}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
};

export default Header;