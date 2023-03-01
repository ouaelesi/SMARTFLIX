import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
