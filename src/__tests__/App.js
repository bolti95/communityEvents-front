import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App";


test('renders Application', () => {
  const PageText = "Community Map"
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  expect(screen.getByText(PageText)).toBeInTheDocument();
});

