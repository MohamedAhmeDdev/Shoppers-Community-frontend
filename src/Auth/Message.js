import React from 'react';

function Message() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5  min-w-screen">
      <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-semibold">Registration Successful!</h2>
        <p className="mt-4 text-gray-600">Thank you for registering. A confirmation email has been sent to your inbox.</p>
        <p className="mt-2 text-gray-600">Please follow the instructions in the email to verify your account and complete your registration.</p>
        <p className="mt-2 text-gray-600">If you do not receive the email within a few minutes, please check your spam folder or contact our support team for assistance.</p>
        <div className="mt-6">
          <a href="/" className="text-blue-600 hover:underline">Return to Home</a>
        </div>
      </div>
    </div>
  );
}

export default Message;
