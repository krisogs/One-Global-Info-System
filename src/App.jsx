import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import {
  SolutionPage,
  ServicePage,
  ManagedServicesOverview,
  ManagedServicePage,
  NotFound,
} from "./pages/detail.jsx";
import { About, News, Careers } from "./pages/company.jsx";
import {
  ResourcesHub,
  Blog,
  Webinars,
  CaseStudies,
  CaseStudyPage,
} from "./pages/resources.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/managed-services" element={<ManagedServicesOverview />} />
          <Route path="/managed-services/:slug" element={<ManagedServicePage />} />

          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
