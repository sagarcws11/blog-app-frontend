import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      
        <div className="flex items-center space-x-2 w-1/3">
          
          <input
            type="text"
            placeholder="Search places..."
            className="w-full px-3 py-1 rounded text-black bg-white"
          />
        </div>

        <h1 className="text-2xl font-bold text-center w-1/3">TravelBlogs</h1>

        <div className="flex justify-end space-x-6 w-1/3 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/destinations" className="hover:underline">Destinations</Link>
          <Link  to="/Blogs" className="hover:underline">Blogs</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/SignUp"   className="hover:underline">SignUp</Link>
        </div>
      </div>
    </nav>
  
    </div>
  )
}

export default Navbar
