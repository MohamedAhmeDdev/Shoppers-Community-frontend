import React from 'react';

function About() {
  return (
    <div className="font-roboto w-full bg-white">
      

      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://pixabay.com/vectors/pugs-dogs-pet-domestic-puppy-7200102/" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://pixabay.com/vectors/pugs-dogs-pet-domestic-puppy-7200102/" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://pixabay.com/vectors/pugs-dogs-pet-domestic-puppy-7200102/" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>

        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-6">Customer’s Testimonials</h2>
          <div className="flex justify-center items-center space-x-4">
            
            <div className="bg-white p-6 rounded-full">
              <img src="https://pixabay.com/photos/cartoon-man-human-person-masculine-871669/" alt="Customer Image" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Group 1</h3>
              <p className="text-gray-600">Customer</p>
              <p className="mt-4">The best service I have come across and used so far, I would forever recommend to anyone</p>
            </div>
            
          </div>
        </section>
      </main>


    </div>
  );
}

export default About;