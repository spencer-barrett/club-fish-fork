import { Outlet } from "react-router";
import NavigationBar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
export default function AppLayout() {
  return (
    <div className="min-h-svh flex flex-col">
      <NavigationBar/>
      {/* <nav></nav> */}
      <main className="flex min-h-[calc(100svh-4rem)] h-full">

      
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
