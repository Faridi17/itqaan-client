import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import { useSelector } from "react-redux"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import BlogDetail from "./pages/BlogDetail"
import RegistrationForm from "./pages/RegistrationForm"
import Registrant from "./pages/Registrant"
import EditRegistrant from "./pages/EditRegistrant"

function App() {
  const isAuth = Boolean(useSelector((state) => state.token))

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/pendaftaran" element={<Registration />} />
          <Route path="/form-pendaftaran" element={<RegistrationForm />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/blog/:title" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard/registrant' element={isAuth ? <Registrant /> : <Navigate to='/' />} />
          <Route path='/dashboard/edit-registrant/:id' element={isAuth ? <EditRegistrant /> : <Navigate to='/' />} />
          <Route path='/dashboard/blog' element={isAuth ? <Blog /> : <Navigate to='/' />} />
          <Route path='/dashboard/gallery' element={isAuth ? <Post /> : <Navigate to='/' />} />
          <Route path='/dashboard/create' element={isAuth ? <Create /> : <Navigate to='/' />} />
          <Route path='/dashboard/edit/:id' element={isAuth ? <Edit /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
