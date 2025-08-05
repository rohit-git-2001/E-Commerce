import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import FaqsPage from "./pages/FaqsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import ContactusPage from "./pages/ContactusPage";
import ErrorPage from "./pages/ErrorPage";
import AdminHomePage from "./pages/Admin/AdminHomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/admin" element={<AdminHomePage />} />"
          <Route path="/*" element={<ErrorPage />} />"
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
