import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react dont catch', () => {
  const { getByText } = render(<App />);
});
