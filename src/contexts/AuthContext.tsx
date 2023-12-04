import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { serverIP } from "../variables/links";

export const AuthContext = createContext<any>({});

export default function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser: any = sessionStorage.getItem("@Auth:user");
      const storageUserInfo = sessionStorage.getItem("@Auth:userInfo");
      if (storageUserInfo && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    await axios
      .post(`${serverIP}/user/sign_in`, {
        email: email,
        password: password,
      })
      .then((res) => {
        const user = res.data.id;
        //@ts-ignore
        let userInfo = JSON.stringify(res.data);
        sessionStorage.setItem("@Auth:userInfo", userInfo);
        sessionStorage.setItem("@Auth:user", JSON.stringify(user));
        setUser(userInfo);
      })
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
