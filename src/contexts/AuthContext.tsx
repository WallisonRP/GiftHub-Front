import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext<any>({});

export default function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser: any = sessionStorage.getItem("@Auth:user");
      const storageToken = sessionStorage.getItem("@Auth:token");
      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    await axios
      .post("http://192.168.1.2:8000/user/sign_in", {
        email: email,
        password: password,
      })
      .then((res) => {
        const user = res.data.id;
        //@ts-ignore
        const token = res.user;
        console.log(user);
        sessionStorage.setItem("@Auth:token", token);
        sessionStorage.setItem("@Auth:user", JSON.stringify(user));
        setUser(token);
      })
      .finally(() => console.log(""))
      .catch(() => {});
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    // <AuthContext.Provider value={{ signInGoogle, signOut, resetPassword, user, signed: !!user, resetedPass: !!reset, }}>
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
