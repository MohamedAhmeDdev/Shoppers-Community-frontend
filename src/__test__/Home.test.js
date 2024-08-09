import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

test('renders Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Check if title is in the document
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

  // Check for the loading state (e.g., pulsating skeleton)
  expect(screen.getAllByRole('button').length).toBeGreaterThan(0); // Assuming buttons are displayed during loading
});



