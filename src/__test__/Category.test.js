import { render, screen } from '@testing-library/react';
import Category from '../pages/Category';
import { MemoryRouter } from 'react-router-dom';

test('renders Category component', () => {
  render(
    <MemoryRouter>
      <Category />
    </MemoryRouter>
  );

  // Check if the heading is in the document
  expect(screen.getByText(/Shop By Category/i)).toBeInTheDocument();
});

