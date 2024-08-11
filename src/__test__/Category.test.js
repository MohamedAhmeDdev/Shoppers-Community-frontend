import { render, screen } from '@testing-library/react';
import Category from '../pages/Category';
import { MemoryRouter } from 'react-router-dom';

test('renders Category component', () => {
  render(
    <MemoryRouter>
      <Category />
    </MemoryRouter>
  );

  expect(screen.getByText(/Shop By Category/i)).toBeInTheDocument();
});

