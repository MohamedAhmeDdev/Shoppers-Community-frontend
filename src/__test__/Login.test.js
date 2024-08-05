import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';

test('handles form validation and displays error messages', async () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </MemoryRouter>
  );


  fireEvent.click(screen.getByRole('button', { name: /login/i }));


  expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/password is required/i)).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'invalid-email' } });
  fireEvent.change(screen.getByPlaceholderText('Confirm Your Password'), { target: { value: 'password123' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
});