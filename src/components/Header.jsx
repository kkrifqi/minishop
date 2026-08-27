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
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-10">
            <h1 className="text-2xl font-bold tracking-tight">MiniShop</h1>
            <nav className="flex items-center gap-6">
                <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Beranda</Link>
                <Link to="/keranjang" className="text-slate-600 hover:text-slate-900 transition-colors">Keranjang</Link>

                {user ? (
                    <div className="flex items-center gap-3">
                        <span className="text-slate-500">{user.email}</span>
                        <Button variant="outline" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button variant="primary">Login</Button>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header;