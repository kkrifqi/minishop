import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            <Header />
            <main className="flex-grow p-4 md:p-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;