import "../styles/globals.css";
import MainNavBar from "../components/MainNavbar";
import { Major_Mono_Display, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${majorMono.variable}`}>
      <div className={inter.className}>
        <MainNavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
