import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header className="site-nav">
        <div className="container nav-inner">
          <NavLink to="/" className="brand">Your Name</NavLink>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          {/* Optional: add /public/resume.pdf or remove this link */}
          <a href="/resume.pdf" className="btn ghost">Résumé</a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Your Name</div>
      </footer>
    </>
  );
}
