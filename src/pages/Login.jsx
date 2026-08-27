import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.email.includes("@")) {
            setError("Email tidak valid");
            return;
        }
        if (form.password.length < 8) {
            setError("Password minimal 8 karakter");
            return;
        }

        setError("");
        login(form.email);
        navigate("/");
    }

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border rounded px-3 py-2"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="border rounded px-3 py-2"
                />
                
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit">Login</Button>
            </form>

            <p className="text-sm mt-3 text-gray-500">
                Belum punya akun? <Link to="/register" className="text-blue-600 underline">Daftar</Link>
            </p>
        </div>
    );
}

export default Login;