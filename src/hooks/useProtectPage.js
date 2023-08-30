import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("role")

        role === "admin" ? navigate("/admin") : navigate("/user")

        if (token === null) {
            console.log("Não está logado!")
            navigate("/login")
        }
    }, [navigate])
}
