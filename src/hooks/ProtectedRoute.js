// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// export const ProtectedRoute = ({ path, element, adminOnly }) => {
//     const { user } = useAuth();

//     if (adminOnly && (!user || user.admin === false)) {
//         return <Navigate to="/" />;
//     }

//     if (!adminOnly && !user) {
//         return <Navigate to="/" />;
//     }

//     return <Route path={path} element={element} />;
// };
