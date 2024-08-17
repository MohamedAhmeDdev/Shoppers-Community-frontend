import React from 'react';

function About() {
  return (
    <div className="font-roboto w-full bg-white">

      
      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
  <section className="flex flex-col md:flex-row items-center mb-12">
    <div className="md:w-2/3">
      <h1 className="text-1xl font-bold mb-4">Welcome to ShopHorizon - Your Ultimate Online Shopping Destination</h1>
      <p className="text-gray-600">Since 2024, ShopHorizon has been committed to offering a seamless shopping experience by providing a wide variety of products at unbeatable prices. Whether you're looking for the latest gadgets, trendy fashion, or everyday essentials, we have it all, right at your fingertips.</p>
    </div>
    <img src="https://cdn.pixabay.com/photo/2024/03/31/00/49/shopping-8665807_1280.jpg" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
  </section>

  <section className="flex flex-col md:flex-row-reverse items-center mb-12">
    <div className="md:w-2/3">
      <h1 className="text-1xl font-bold mb-4">Why ShopHorizon? Unbeatable Prices, Diverse Selection, and Secure Shopping</h1>
      <p className="text-gray-600">At ShopHorizon, we prioritize your satisfaction by offering products that meet your needs and budget. Our secure payment gateways and customer-friendly return policies ensure that you can shop with confidence, knowing that we’ve got you covered.</p>
    </div>
    <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:mr-6" />
  </section>

  <section className="flex flex-col md:flex-row items-center mb-12">
    <div className="md:w-2/3">
      <h1 className="text-1xl font-bold mb-4">Discover New Products and Deals Daily on ShopHorizon</h1>
      <p className="text-gray-600">Stay ahead of the trends with our daily updates on new arrivals and exclusive deals. From tech gadgets to fashion, and home essentials to beauty products, ShopHorizon is your go-to platform for discovering and purchasing the latest products online.</p>
    </div>
    <img src="https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
  </section>
</main>




    </div>
  );
}

export default About;