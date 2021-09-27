import React, { useRef } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
// import Layout from "@/components/Layout";
// import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const scrollRef = useRef(null);
  return (
    <ChakraProvider>
      <div className="w-full h-screen flex flex-col sm:flex-row overflow-hidden">
        {/* <Layout scrollRef={scrollRef} /> */}
        <div
          ref={scrollRef}
          className="w-screen h-screen overflow-x-hidden overflow-y-auto"
        >
          <Component {...pageProps} />
          {/* <Footer /> */}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
