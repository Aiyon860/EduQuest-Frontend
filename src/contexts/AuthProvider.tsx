import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export interface User {
  id_siswa: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  refreshUser: () => void;
  logout: () => void;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      if (!token) throw new Error("Access token not found");

      const res = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }); 

      if (!res.ok) throw new Error("Unauthorized");

      const json = await res.json();
      const siswa = json.data;
      const data: User = {
        id_siswa: siswa.id_siswa,
        email: siswa.email,
      };

      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser: fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
