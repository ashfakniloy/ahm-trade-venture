import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AHM Trade Venture</title>
        <meta name="description" content="ahm trade venture" />
        <meta name="keywords" content="ahm trade venture" />
      </Head>

      <div className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
