import { Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Search size={16} strokeWidth={2.5} />
            </span>

            <span className="text-base font-bold tracking-tight text-slate-800">
              FindMe
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) => `text-xs font-semibold transition ${isActive ? "text-blue-600": "text-slate-500 hover:text-slate-800"}`}>
              Home
            </NavLink>

            <NavLink
              to="/browse"
              className={({ isActive }) =>
                `text-xs font-semibold transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-800"
                }`
              }
            >
              Browse items
            </NavLink>

            <NavLink
              to="/report"
              className={({ isActive }) =>
                `text-xs font-semibold transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-800"
                }`
              }
            >
              Report item
            </NavLink>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden text-xs font-semibold text-slate-700 hover:text-blue-600 sm:block"
            >
              Log in
            </Link>

            <Link to="/signup">
              <Button size="sm">
                Sign up
              </Button>
            </Link>
          
          </div>

        </div>
      </Container>
    </header>
  );
}