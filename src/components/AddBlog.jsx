import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null); 
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image);
    }
    formData.append('description', description);
    try {
      const response = await axios.post(`${process.env.VITE_API_URL}/api/blogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Blog posted successfully!');
      setTitle('');
      setImage('null');
      setDescription('');
      navigate("/blog");
    
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.error}`);
      } else {
        setMessage(`Server error: ${error.message}`);
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Post Blog
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
    </div>
  );
}

export default AddBlog;
