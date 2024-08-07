import React from 'react';

function Contact() {
  return (
    <div className="w-full bg-white">


      {/* Main Content */}
<<<<<<< HEAD
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
=======
      <main className="w-full py-16 px-4">
      <section className="text-center mb-12 relative">
      <div className="relative w-full mb-6" style={{ height: '450px' }}> 
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129_1280.jpg"
          alt="Cityscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

          <h1 className="absolute bottom-3/4 inset-0 flex items-center justify-center text-3xl font-bold text-black">Contact Us</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 text-center mb-12">
        <div className="mb-6 md:mb-0 shadow-lg p-4 rounded">
            <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" alt="Location Icon" className="mx-auto mb-4 h-12 w-12" />
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-600">ShopHorizon<br />Street Lane<br />Avenue 11</p>
          </div>
          <div className="mb-6 md:mb-0 shadow-lg p-4 rounded">
            <img src="https://cdn-icons-png.flaticon.com/128/159/159052.png" alt="Location Icon" className="mx-auto mb-4 h-12 w-12" />
            <h2 className="text-xl font-bold mb-2">Telephone</h2>
            <p className="text-gray-600">+2547012345678</p>
          </div>
          <div className="mb-6 md:mb-0 shadow-lg p-4 rounded">
            <img src="https://cdn-icons-png.flaticon.com/128/159/159052.png" alt="Location Icon" className="mx-auto mb-4 h-12 w-12" />
>>>>>>> 70a07410723939bde5c40575c5558271e27ef485
            <h2 className="text-xl font-bold mb-2">Mail</h2>
            <p className="text-gray-600">shophorizon@gmail.com</p>
          </div>
        </section>
      </main>


    </div>
  );
}

export default Contact;