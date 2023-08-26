import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import User from "../pages/User"
import ErrorPage from "../pages/ErrorPage"
// import { ProtectedRoute } from "../hooks/ProtectedRoute"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/user" element={<User />} />
                {/* <Route path="/admin" element={<ProtectedRoute element={<Admin />} adminOnly />} /> */}
                {/* <Route path="/user" element={<ProtectedRoute element={<User />} />} /> */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}