import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../frontend/home";
import FaqPage from "../frontend/faq";
import ContactPage from "../frontend/contact";
import BlogPage from "../frontend/blog";
import BlogDetail from "../frontend/blogDetail";
import CareerPage from "../frontend/careers";
import PrivacyPolicy from "../frontend/privacy-policy";
import TermsAndCondition from "../frontend/terms-and-condition";
import CareerDetail from "../frontend/careerDetail";
import CareerApply from "../frontend/careerApply";
import CataloguePage from "../frontend/catalogue";
import CategoryBlogPage from "../frontend/categoryBlogs";
import ServicePage from "../frontend/services";
import ServiceDetail from "../frontend/serviceDetail";
import Product from "../frontend/Product";

import ProductIframe from "../frontend/Product/ProductIframe";
import Solutions from "../frontend/solutions";
import AboutPage from "../frontend/about";

import ProjectDetail from "../frontend/projectDetail";
import Projects from "../frontend/projects";
import Industries from "../frontend/industries";
import Download from "../frontend/download";
import SolutionDetail from "../frontend/solutions/components/SolutionDetail";
import CategoryPage from "../frontend/category";
import OurAssociates from "../frontend/about/OurAssociates";
import SisterConcern from "../frontend/about/SisterConcern";
import ProductPage from "../frontend/product_page";
import ProductCategoryPage from "../frontend/product_category";

const PublicRouter = () => {
      return (
            <>
                  <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route path="/faqs" element={<FaqPage />} />
                        <Route path="/contact-us" element={<ContactPage />} />

                        {/* Blog Page */}
                        <Route path="/blogs" element={<BlogPage />} />
                        <Route path="/blogs/:blogId" element={<BlogDetail />} />

                        {/* Career */}
                        <Route path="/careers" element={<CareerPage />} />
                        <Route
                              path="/careers/:careerId"
                              element={<CareerDetail />}
                        />
                        <Route
                              path="/careers/:careerId/apply"
                              element={<CareerApply />}
                        />

                        {/* Privacy Policy */}
                        <Route
                              path="/privacy-policy"
                              element={<PrivacyPolicy />}
                        />

                        {/* Terms & Condition */}
                        <Route
                              path="/terms-and-conditions"
                              element={<TermsAndCondition />}
                        />

                        {/* Catalogue */}
                        <Route path="/catalogues" element={<CataloguePage />} />

                        {/* Blog Category */}
                        <Route
                              path="/blogs/categories/:categoryId"
                              element={<CategoryBlogPage />}
                        />

                        {/* Services */}
                        <Route path="/services" element={<ServicePage />} />
                        <Route
                              path="/services/:serviceId"
                              element={<ServiceDetail />}
                        />

                        {/* Product Detail Page */}
                        <Route
                              path="/products/:productId"
                              element={<Product />}
                        />

                        {/* Thermax page  */}
                        <Route
                              path="/productiframe"
                              element={<ProductIframe />}
                        />

                        {/* Solutions page  */}
                        <Route path="/reference" element={<Solutions />} />

                        {/* solutions detail page */}
                        <Route
                              path="/reference-detail"
                              element={<SolutionDetail />}
                        />

                        {/* Project page  */}
                        <Route path="/projects" element={<Projects />} />
                        <Route
                              path="/projectdetail"
                              element={<ProjectDetail />}
                        />

                        {/* category page */}
                        <Route path="/products" element={<ProductPage />} />
                        <Route
                              path="/category/:categoryId"
                              element={<CategoryPage />}
                        />
                        <Route
                              path="/category/:categoryId/product"
                              element={<ProductCategoryPage />}
                        />

                        {/* product listing page */}
                        {/* industries  */}
                        <Route path="/industries" element={<Industries />} />

                        {/* industries  */}
                        <Route path="/downloads" element={<Download />} />

                        {/* our associates */}
                        <Route path="/associates" element={<OurAssociates />} />

                        {/* sister concern */}
                        <Route
                              path="/sister-concerns"
                              element={<SisterConcern />}
                        />
                  </Routes>
            </>
      );
};

export default PublicRouter;
