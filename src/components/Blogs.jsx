import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('process.env.API_URL/api/blogs');
        setBlogs(res.data);
        console.log(res.data,"testing data")
      } catch (err) {
        setError('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src={`process.env.API_URL${blog.image}`} 
              alt={blog.title} 
              className="h-96 w-full object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
