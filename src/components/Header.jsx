import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-[#0D3B66] text-white sticky top-0 z-10 shadow-md">
            <h1 className="text-2xl font-bold tracking-tight">MiniShop</h1>
            <nav className="flex items-center gap-6">
                <Link to="/" className="text-white hover:text-gray-200 transition-colors">Beranda</Link>
                <Link to="/keranjang" className="text-white hover:text-gray-200 transition-colors">Keranjang</Link>

                {user ? (
                    <div className="flex items-center gap-3">
                        <span className="text-white/80">{user.email}</span>
                        <Button onClick={handleLogout} className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0D3B66]">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button className="bg-white text-[#0D3B66] hover:bg-gray-100">Login</Button>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header;