import "../styles/globals.css";
import MainNavBar from "../components/MainNavbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNavBar />
      <Component {...pageProps} />
    </>
  );
}
