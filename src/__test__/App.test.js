import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders App without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const { unmount } = render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    {
      container: div,
    }
  );

  // Clean up
  unmount();
  document.body.removeChild(div);
})
