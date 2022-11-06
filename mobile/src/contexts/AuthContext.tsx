import { createContext, useState } from "react";

export const AuthContext = createContext({} as AuthContextDataProps);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState<UserProps>();

  async function signIn() {
    setUser({
      name: "Messias Soares",
      avatarUrl: "https://github.com/soaresmessiasg130.png",
    });

    console.log("Vamos logar!!!");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export interface UserProps {
  name: string;
  avatarUrl?: string;
}
