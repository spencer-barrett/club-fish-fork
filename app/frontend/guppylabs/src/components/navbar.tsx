import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-svw min-h-16 bg-amber-200">
        <div className="flex justify-center items-center h-full">
        

        
        <Link className="pr-2" to="/">Home</Link>
        <Link className="pr-2" to="/about">About</Link>
        <Link className="pr-2" to="/staff">Staff</Link>
        </div>
        
      
    </nav>
  );
}
