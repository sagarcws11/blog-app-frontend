import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/blog")
  }
  return (
    <div>
      <section className="h-screen bg-gradient-to-r from-orange-300 to-pink-400 text-white text-center py-20 px-4">
      <h2 className="text-4xl font-extrabold mb-4">Explore the World with Us</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Discover new places, meet amazing people, and get inspired by breathtaking destinations.</p>
      <button onClick={handleClick}
       className="cursor-pointer px-6 py-2 bg-white text-pink-600 font-semibold rounded-full
        hover:bg-gray-100 transition">
          Start Exploring</button>
    </section>
    </div>
  )
}

export default Home;
