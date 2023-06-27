import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

type LoginContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  handleLogout: () => void;
  error: string;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("id", data.id);
        router.push("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    // Add any additional logout logic here
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    error,
  };
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};

type LoginProviderProps = {
  children: React.ReactNode;
};

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const loginState = useLogin();

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  );
};
