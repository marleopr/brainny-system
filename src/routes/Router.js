import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Header from "../components/Header"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import User from "../pages/User"
import ErrorPage from "../pages/ErrorPage"

export const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route index element={<Login />} />
                <Route path="admin" element={<Admin />} />
                <Route path="user" element={<User />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}