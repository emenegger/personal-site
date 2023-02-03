import '../styles/globals.css'
import MainNavbar from "../components/MainNavbar";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <MainNavbar/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
