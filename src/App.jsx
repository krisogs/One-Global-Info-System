import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

// Each page loads on demand, so the first visit only downloads what it needs.
const named = (loader, name) => lazy(() => loader().then((m) => ({ default: m[name] })));
const loadDetail = () => import("./pages/Detail.jsx");
const loadCompany = () => import("./pages/Company.jsx");
const loadResources = () => import("./pages/Resources.jsx");

const Home = lazy(() => import("./pages/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const SolutionPage = named(loadDetail, "SolutionPage");
const ServicePage = named(loadDetail, "ServicePage");
const ManagedServicesOverview = named(loadDetail, "ManagedServicesOverview");
const ManagedServicePage = named(loadDetail, "ManagedServicePage");
const NotFound = named(loadDetail, "NotFound");
const About = named(loadCompany, "About");
const News = named(loadCompany, "News");
const Careers = named(loadCompany, "Careers");
const ResourcesHub = named(loadResources, "ResourcesHub");
const Blog = named(loadResources, "Blog");
const Webinars = named(loadResources, "Webinars");
const CaseStudies = named(loadResources, "CaseStudies");
const CaseStudyPage = named(loadResources, "CaseStudyPage");

// The router is supplied by the caller: BrowserRouter in the browser
// (main.jsx) and StaticRouter when pre-rendering (entry-server.jsx).
export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-[60vh]" />}>
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
      </Suspense>
    </Layout>
  );
}
