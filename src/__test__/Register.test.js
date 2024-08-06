// Register.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Register from '../Auth/Register';
// import '@testing-library/jest-dom/extend-expect';

test('handles form validation and displays error messages', async () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </MemoryRouter>
  );

  // Click the submit button without filling the form
  fireEvent.click(screen.getByText(/register Now/i));

  // Check for validation messages
  expect(await screen.findByText(/first name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/last name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Confirm password is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/confirm password is required/i)).toBeInTheDocument();

  // Fill in the form fields and submit again
  fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'password123' } });
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password456' } });
  fireEvent.click(screen.getByText(/Register Now/i));

  // Check for any additional validation or error messages
  expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument(); // Adjust or remove if necessary based on your form validation
});
