
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Register from '../Auth/Register';


test('handles form validation and displays error messages', async () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </MemoryRouter>
  );


  fireEvent.click(screen.getByText(/register Now/i));

  expect(await screen.findByText(/first name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/last name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Confirm password is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/confirm password is required/i)).toBeInTheDocument();

 
  fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'password123' } });
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password456' } });
  fireEvent.click(screen.getByText(/Register Now/i));

 
  expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument(); 
});
