import { createContext, useContext, useState } from "react";
import usersApi from "../constants/usersApi.json"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        const authenticatedUser = usersApi.usersApi.find(user =>
            user.email === userData.email && user.password === userData.password
        );
        if (authenticatedUser) {
            setUser(authenticatedUser);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;

export function useAuth() {
    return useContext(AuthContext);
}
