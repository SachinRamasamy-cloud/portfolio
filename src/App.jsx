import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import HeroSection from "./dash/Hero";
import Skills from "./dash/Skills";
import Projects from "./dash/Projects";
import Experience from "./dash/Experience";
import About from "./dash/About";
import Contact from "./dash/Contact";
import ProjectDetails from "./detial/Detial";
import AdminDashboard from "./admin/Dash";
import Login from "./admin/Login"; 
import ProtectedRoute from "./components/ProtectedRoute";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the child route content */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Skills />
                <Projects />
                <Experience />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detial" element={<ProjectDetails />} />
        </Route>


        {/* --- ADMIN ROUTES (No Nav/Footer) --- */}
        
        <Route path="/login" element={<Login />} />

        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </>
  );
}

export default App;