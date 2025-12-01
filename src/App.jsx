import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import NewClientForm from "./pages/NewClientForm.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import AccessibilityStatement from "./pages/AccessibilityStatement.jsx";
import Blog from "/src/pages/Blog.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import "/src/assets/fonts/SourceSans3-VariableFont_wght.ttf";
import "/src/assets/fonts/Allison-Regular.ttf";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "./components/PageWrapper.jsx";

import "/src/Styles.css";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/menu"
              element={
                <PageWrapper>
                  <Menu />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/newclientform"
              element={
                <PageWrapper>
                  <NewClientForm />
                </PageWrapper>
              }
            />
            <Route
              path="/privacypolicy"
              element={
                <PageWrapper>
                  <PrivacyPolicy />
                </PageWrapper>
              }
            />
            <Route
              path="/termsandconditions"
              element={
                <PageWrapper>
                  <TermsAndConditions />
                </PageWrapper>
              }
            />
            <Route
              path="/accessibilitystatement"
              element={
                <PageWrapper>
                  <AccessibilityStatement />
                </PageWrapper>
              }
            />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </>
      <Footer />
    </>
  );
}

export default App;
