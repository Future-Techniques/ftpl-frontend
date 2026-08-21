import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/components/globalstyle";
import "./App.css";
import { lightTheme } from "../styles/components/themes";

import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../frontend/layouts/header";
import Footer from "../frontend/layouts/footer";
import PublicRouter from "../router";
import ScrollToTop from "../components/ScrollToTop";
import EnquiryBox from "../components/common/EnquiryBox";
import MobileHeader from "../components/responsive/MobileHeader";
import { MetaContextProvider } from "../stores/MetaContext";

const App = () => {
      return (
            <>
                  <MetaContextProvider>
                        <GlobalStyle />
                        <Toaster position="bottom-left" />
                        <ThemeProvider theme={lightTheme}>
                              <Router>
                                    <ScrollToTop />
                                    <AppContent />
                              </Router>
                        </ThemeProvider>
                  </MetaContextProvider>
            </>
      );
};

const AppContent = () => {
      const currentLocation = useLocation();
      const isProductIframe = currentLocation.pathname === "/productiframe";

      return (
            <>
                  {isProductIframe ? null : <Header />}
                  {isProductIframe ? null : <EnquiryBox />}
                  {isProductIframe ? null : <MobileHeader />}
                  <Suspense fallback="loading">
                        <PublicRouter />
                  </Suspense>
                  {isProductIframe ? null : <Footer />}
            </>
      );
};

export default App;
