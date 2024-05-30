import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("email");
    const currentUserRole = localStorage.getItem("role");
    const currentUserId = localStorage.getItem("userId");
    setUser(currentUser)
    setRole(currentUserRole);
    setUserId(currentUserId);
    setLoading(false)
  }, [user]);

  const authInfo = {
    user,
    loading,
    setLoading,
    role,
    setRole,
    setUser,
    userId,
    setUserId
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
