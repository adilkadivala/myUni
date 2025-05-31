"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  role: "student" | "admin";
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const DEMO_USERS = [
  {
    id: "1",
    email: "student@myuni.edu",
    password: "student123",
    name: "Maria Rodriguez",
    role: "student" as const,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    email: "admin@myuni.edu",
    password: "admin123",
    name: "Dr. John Smith",
    role: "admin" as const,
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("myuni_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Redirect logic based on authentication and role
    if (!isLoading && user) {
      if (pathname === "/" || pathname.startsWith("/auth")) {
        // Redirect authenticated users away from landing/auth pages
        router.push(user.role === "admin" ? "/admin" : "/student");
      } else if (pathname.startsWith("/admin") && user.role !== "admin") {
        // Prevent students from accessing admin routes
        router.push("/student");
      } else if (pathname.startsWith("/student") && user.role !== "student") {
        // Prevent admins from accessing student routes (optional)
        router.push("/admin");
      }
    } else if (
      !isLoading &&
      !user &&
      (pathname.startsWith("/admin") || pathname.startsWith("/student"))
    ) {
      // Redirect unauthenticated users to sign in
      router.push("/auth/sign-in");
    }
  }, [user, pathname, isLoading, router]);

  const login = async (email: string, password: string): Promise<boolean> => {
    const demoUser = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (demoUser) {
      const { password: _, ...userWithoutPassword } = demoUser;
      setUser(userWithoutPassword);
      localStorage.setItem("myuni_user", JSON.stringify(userWithoutPassword));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("myuni_user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
