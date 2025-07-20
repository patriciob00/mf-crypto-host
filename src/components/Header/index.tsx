import { Link, useLocation } from "react-router-dom";

import './styles.scss';

export function Header() {
  const location = useLocation();

  return (
    <header className="app-header">
      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Prices
        </Link>
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}