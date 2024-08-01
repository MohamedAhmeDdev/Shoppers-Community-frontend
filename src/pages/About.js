import React from 'react';

function About() {
  return (
    <div className="font-roboto w-full bg-white">

      
      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
      <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-1xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2024/03/31/00/49/shopping-8665807_1280.jpg" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-1xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:mr-6" />
        </section>
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-1xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
      </main>



    </div>
  );
}

export default About;