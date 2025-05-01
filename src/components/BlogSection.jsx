import React from 'react'

const BlogCard = ({ title, image, description }) => (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-3 text-blue-500 hover:underline">Read more →</button>
      </div>
    </div>
  );
  
function BlogSection() {
  return (
    <div>
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Latest Vlogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <BlogCard
            title="Backpacking in Bali"
            image="https://source.unsplash.com/random/400x300?bali"
            description="Sunsets, beaches, and jungle adventures in Indonesia’s paradise island."
          />
          <BlogCard
            title="Winter in Switzerland"
            image="https://source.unsplash.com/random/400x300?switzerland"
            description="Chasing snow-capped peaks and chocolate through alpine villages."
          />
          <BlogCard
            title="Road Trip USA"
            image="https://source.unsplash.com/random/400x300?roadtrip"
            description="Exploring the American highways, diners, and national parks."
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default BlogSection
