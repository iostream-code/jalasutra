import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./views/layout/MainLayout"
import Login from "./views/auth/Login"
import Dashboard from "./views/Dashboard"
import ServiceIndex from "./views/services/Index"
import ServiceCreate from "./views/services/Create"
import ServiceDetail from "./views/services/Detail"
import ServiceEdit from "./views/services/Edit"

import NotFound from "./views/error/NotFound"

import 'flowbite'
import 'flowbite-react'

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
              <Route path="layanan/tambah" element={<ServiceCreate />} />
              <Route path="layanan/:id" element={<ServiceDetail />} />
              <Route path="layanan/:id/ubah" element={<ServiceEdit />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
