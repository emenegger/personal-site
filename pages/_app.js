import "../styles/globals.css";
import MainNavBar from "../components/MainNavbar";
import { Major_Mono_Display, Inter, Bebas_Neue, Satisfy } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono",
});

const travel = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const cursive = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${majorMono.variable} ${travel.variable} ${cursive.variable} `}>
      <div className={inter.className}>
        <MainNavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
