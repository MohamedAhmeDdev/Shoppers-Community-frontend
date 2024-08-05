// Import necessary libraries
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '../Auth/ForgotPassword';

// Mock the API call
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
      // Assuming there should be an error message displayed for empty fields
      expect(screen.getByText('Please enter your email')).toBeInTheDocument();
    });
  });

  test('displays an error if the email does not exist', async () => {
    // Mock the fetch response for email does not exist
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: "Email does not exist" })
      })
    );

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText('Enter Your Email');
    const submitButton = screen.getByText('Submit');

    // Enter an email that does not exist
    fireEvent.change(emailInput, { target: { value: 'nonexistent@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // Check that the error message for non-existent email is displayed
      expect(screen.getByText('Email does not exist')).toBeInTheDocument();
    });
  });
});
