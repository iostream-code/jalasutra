import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./views/layout/MainLayout"
import Dashboard from "./views/Dashboard"

import 'flowbite'
import 'flowbite-react'
import NotFound from "./views/error/NotFound"

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
