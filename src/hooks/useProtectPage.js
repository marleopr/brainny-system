import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("Token:", token);

        if (token === null) {
            console.log("Não está logado!")
            navigate("/")
        }
    }, [navigate])
}
