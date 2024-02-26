import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./views/layout/MainLayout"
import Login from "./views/auth/Login"
import Dashboard from "./views/Dashboard"

import ServiceIndex from "./views/services/Index"
import ServiceCreate from "./views/services/Create"
import ServiceDetail from "./views/services/Detail"
import ServiceEdit from "./views/services/Edit"

import ServiceTypeIndex from "./views/service-types/Index"
import ServiceTypeCreate from "./views/service-types/Create"
import ServiceTypeDetail from "./views/service-types/Detail"
import ServiceTypeEdit from "./views/service-types/Edit"

import UserIndex from "./views/users/Index"
import UserCreate from "./views/users/Create"
import UserDetail from "./views/users/Detail"
import UserEdit from "./views/users/Edit"

import VillageIndex from "./views/villages/Index"
import VillageCreate from "./views/villages/Create"
import VillageDetail from "./views/villages/Detail"
import VillageEdit from "./views/villages/Edit"

import MailIndex from "./views/mails/Index"
import MailCreate from "./views/mails/Create"
import MailDetail from "./views/mails/Detail"
import MailEdit from "./views/mails/Edit"

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
              <Route path="jenis-layanan" element={<ServiceTypeIndex />} />
              <Route path="jenis-layanan/tambah" element={<ServiceTypeCreate />} />
              <Route path="jenis-layanan/:id" element={<ServiceTypeDetail />} />
              <Route path="jenis-layanan/:id/ubah" element={<ServiceTypeEdit />} />
              <Route path="pengguna" element={<UserIndex />} />
              <Route path="pengguna/tambah" element={<UserCreate />} />
              <Route path="pengguna/:id" element={<UserDetail />} />
              <Route path="pengguna/:id/ubah" element={<UserEdit />} />
              <Route path="desa" element={<VillageIndex />} />
              <Route path="desa/tambah" element={<VillageCreate />} />
              <Route path="desa/:id" element={<VillageDetail />} />
              <Route path="desa/:id/ubah" element={<VillageEdit />} />
              <Route path="surat" element={<MailIndex />} />
              <Route path="surat/tambah" element={<MailCreate />} />
              <Route path="surat/:id" element={<MailDetail />} />
              <Route path="surat/:id/ubah" element={<MailEdit />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
