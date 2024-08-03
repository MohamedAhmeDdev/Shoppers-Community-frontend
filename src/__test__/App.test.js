import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

test('App component should be importable and render without errors', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});
