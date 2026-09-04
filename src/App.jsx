import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"


const Home = lazy(() => import("@/pages/Home")); // Lazy load the Home component.
const ServiceSingle = lazy(() => import("@/pages/ServiceSingle"));
const BlogSingle = lazy(() => import("@/pages/BlogSingle"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Blog = lazy(() => import("@/pages/Blog"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectSingle = lazy(() => import("@/pages/ProjectSingle"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogSingle />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectSingle />} />
        </Route>
      </Routes>
    </Suspense>
  )
}


