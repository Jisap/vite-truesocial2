import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ServiceSingle from "./pages/ServiceSingle";


const Home = lazy(() => import("@/pages/Home")); // Lazy load the Home component.

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="services/:slug" element={<ServiceSingle />} />
        </Route>
      </Routes>
    </Suspense>
  )
}


