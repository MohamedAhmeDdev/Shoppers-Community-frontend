import React from 'react';

function Contact() {
  return (
    <div className="w-full bg-white">


      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <img src="https://placehold.co/1000x400" alt="Cityscape" className="mx-auto mb-6" />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 text-center mb-12">
          <div className="mb-6 md:mb-0">
            <i className="fas fa-map-marker-alt fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-600">ShopHorizon<br />Street Lane<br />Avenue 11</p>
          </div>
          <div className="mb-6 md:mb-0">
            <i className="fas fa-phone-alt fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Telephone</h2>
            <p className="text-gray-600">+2547012345678</p>
          </div>
          <div>
            <i className="fas fa-envelope fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Mail</h2>
            <p className="text-gray-600">shophorizon@gmail.com</p>
          </div>
        </section>
      </main>


    </div>
  );
}

export default Contact;