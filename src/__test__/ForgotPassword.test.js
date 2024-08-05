// Import necessary libraries
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '../Auth/ForgotPassword';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: false, message: "Email does not exist" })
  })
);

describe('ForgotPassword Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('displays an error if the email field is empty and the form is submitted', async () => {
    render(<ForgotPassword />);

    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      
      expect(screen.getByText('Please enter your email')).toBeInTheDocument();
    });
  });

  test('displays an error if the email does not exist', async () => {
 
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: "Email does not exist" })
      })
    );

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText('Enter Your Email');
    const submitButton = screen.getByText('Submit');

    
    fireEvent.change(emailInput, { target: { value: 'nonexistent@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
   
      expect(screen.getByText('Email does not exist')).toBeInTheDocument();
    });
  });
});
