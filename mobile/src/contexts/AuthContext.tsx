import { createContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export const AuthContext = createContext({} as AuthContextDataProps);

export default function AuthContextProvider({ children }) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState<UserProps>();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "749902299484-54e2fj0lstn1t61edi7grctju5u97sed.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["email", "profile"],
  });

  useEffect(() => {
    async function loadSource() {
      if (
        response?.type === "success" &&
        response?.authentication?.accessToken
      ) {
        await signInWithGoogle(response.authentication.accessToken);
      }
    }

    loadSource();
  }, [response]);

  async function signIn() {
    try {
      setIsUserLoading(true);

      await promptAsync();
    } catch (error) {
      console.log(error);

      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  async function signInWithGoogle(accessToken: string) {
    console.log("ACCESS TOKEN => ", accessToken);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isUserLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export interface UserProps {
  name: string;
  avatarUrl?: string;
}
