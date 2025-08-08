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
import AdminMainCategoryPage from "./pages/Admin/MainCategory/AdminMainCategoryPage";
import AdminCreateMainCategoryPage from "./pages/Admin/MainCategory/AdminCreateMainCategoryPage";

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

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/maincategory" element={<AdminMainCategoryPage />} />
          <Route path="/admin/maincategory/create" element={<AdminCreateMainCategoryPage />} />
          <Route path="/*" element={<ErrorPage />} />"
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
