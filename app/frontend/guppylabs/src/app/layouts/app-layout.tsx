import { Outlet } from "react-router";
import NavigationBar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
export default function AppLayout() {
  return (
    <div className="min-h-svh flex flex-col">
      <NavigationBar/>
      {/* <nav></nav> */}
      <main className="flex flex-1">

      
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
