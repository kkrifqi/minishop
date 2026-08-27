import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";

const DetailProduk = lazy(() => import("./pages/DetailProduk"));
const Keranjang = lazy(() => import("./pages/Keranjang"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Memuat...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/keranjang" element={
              <ProtectedRoute>
                <Keranjang />
              </ProtectedRoute>
            }/>
            
            <Route path="/" element={<Home />} />
            <Route path="/produk/:id" element={<DetailProduk />} />
            <Route path="*" element={<h2>404 - Halaman Tidak Ditemukan</h2>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;