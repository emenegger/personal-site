import "../styles/globals.css";
import MainNavBar from "../components/MainNavbar";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <MainNavBar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
