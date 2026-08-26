import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}


