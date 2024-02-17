import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./views/layout/MainLayout"
import Login from "./views/auth/Login"
import Dashboard from "./views/Dashboard"

import NotFound from "./views/error/NotFound"

import 'flowbite'
import 'flowbite-react'
import ServiceIndex from "./views/services/Index"

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="layanan" element={<ServiceIndex />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
