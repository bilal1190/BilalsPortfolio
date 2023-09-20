import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LinkProps } from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BiLogoReact from "react-icons/bi"


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTop smooth top="20" />
      <Footer />
    </>
  );
}
