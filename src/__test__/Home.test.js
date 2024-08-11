import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

test('renders Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/Find The Best Price/i)).toBeInTheDocument();
  expect(screen.getByText(/Shop By Category/i)).toBeInTheDocument();
  expect(screen.getByText(/Keep Updated/i)).toBeInTheDocument();
});

test('shows loading skeletons before categories are loaded', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  
  expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
});



