import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ResetPassword from '../Auth/ResetPassword';

test('handles form validation and displays error messages', async () => {
  render(
    <MemoryRouter initialEntries={['/reset-password/some-token']}>
      <Routes>
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </MemoryRouter>
  );


  fireEvent.click(screen.getByText(/submit/i));


  expect(await screen.findByText(/please fill in all fields/i)).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password456' } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();
});
