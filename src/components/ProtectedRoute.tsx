// src/components/ProtectedRoute.tsx
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { Spinner } from "flowbite-react";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Call /api/auth/me to verify access token
        const res = await fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          // Try refresh if access token is invalid
          const refreshRes = await fetch("/api/auth/refresh", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${refreshToken}`,
            },
          });

          if (refreshRes.ok) {
            const data = await refreshRes.json();
            const newAccessToken = data.data.accessToken;

            sessionStorage.removeItem("accessToken");
            sessionStorage.setItem("accessToken", newAccessToken);

            setIsAuthenticated(true);
          } else {
            // If refresh token also fails
            sessionStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner aria-label="Loading auth status" size="xl" color="info" />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;