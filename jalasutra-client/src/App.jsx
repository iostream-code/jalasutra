import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Unauthenticated from "./views/layout/UnauthenticatedLayout"
import NotFound from "./views/error/NotFound"
import Welcome from "./views/Welcome"
import Dashboard from "./views/Dashboard"
import Service from "./views/Service"
import Gallery from "./views/Gallery"
import MailIndex from "./views/mail/Index"
import Login from "./views/auth/Login"

import Loader from "./components/Loader"

import 'flowbite'
import 'flowbite-react'

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Unauthenticated />}>
              <Route index element={<Dashboard />} />
              <Route path="/layanan" element={<Service />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/surat" element={<MailIndex />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
