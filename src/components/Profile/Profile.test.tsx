import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

test('renders learn react link', () => {
  const { getByText } = render(<Profile />);
  const linkElement = getByText(/My Profile/i);
  expect(linkElement).toBeInTheDocument();
});
