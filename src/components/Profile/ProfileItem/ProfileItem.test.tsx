import React from 'react';
import { render } from '@testing-library/react';
import ProfileItem from './ProfileItem';

test('renders the component with both values', async () => {
  const { getByTestId } = render(<ProfileItem legend={'Legend'} value={'value'} />);
  const legendElement = getByTestId('legendElement');
  const valueElement = getByTestId('valueElement');

  expect(legendElement.textContent).toBe('Legend:');
  expect(valueElement.textContent).toBe('value');
});
