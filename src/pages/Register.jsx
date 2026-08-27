import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Register() {
    const [form, setForm] = useState({ email: "", password: "", konfirmasi: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.email.includes("@") || !form.email.includes(".")) {
            setError("Email tidak valid");
            return;
        }
        if (form.password.length < 8) {
            setError("Password minimal 8 karakter");
            return;
        }
        if (form.password !== form.konfirmasi) {
            setError("Konfirmasi password tidak cocok");
            return;
        }

        setError("");
        navigate("/login");
    }

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4">Daftar Akun</h2>
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
                
                <input
                    type="password"
                    placeholder="Konfirmasi Password"
                    value={form.konfirmasi}
                    onChange={(e) => setForm({ ...form, konfirmasi: e.target.value })}
                    className="border rounded px-3 py-2"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit">Daftar</Button>
            </form>

            <p className="text-sm mt-3 text-gray-500">
                Sudah punya akun? <Link to="/login" className="text-blue-600 underline">Login</Link>
            </p>
        </div>
    );
}

export default Register;