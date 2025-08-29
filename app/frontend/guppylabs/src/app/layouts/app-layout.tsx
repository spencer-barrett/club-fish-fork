import { Outlet, Link } from "react-router";
export default function AppLayout() {
  return (
    <div>
      <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>
      <Outlet />
    </div>
  );
}
