import { Outlet } from "react-router";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
export default function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <Navbar/>
      {/* <nav></nav> */}
      <main className="flex h-full">

      
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
