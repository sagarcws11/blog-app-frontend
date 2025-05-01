import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import './App.css'
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddBlog from './components/AddBlog';
import BlogList from './components/Blogs';
function App() {

  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Blogs" element={<AddBlog/>}/>
          <Route path="/blog" element={<BlogList />} />
          
        </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App
