// Register.test.js
import React, {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../Auth/Register';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

test('validates required fields', async () => {
    render(<Register />);
    fireEvent.submit(screen.getByRole('form'));
  
    expect(screen.getByText('First name is required.')).toBeInTheDocument();
    expect(screen.getByText('Last name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Password  is required.')).toBeInTheDocument();
    expect(screen.getByText('Confirm password is required.')).toBeInTheDocument();   
  
  });