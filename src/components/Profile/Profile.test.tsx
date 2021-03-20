import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Profile from './Profile';
import axios from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Profile tests', () => {
  it('renders properly', () => {
    const { getByText } = render(<Profile />);
    const linkElement = getByText(/Profile/i);
    expect(linkElement).toBeInTheDocument();
  })

  it("renders without crashing", async () => {

    const data = {
      data: {
        id: '1',
        name: 'name',
        jobTitle: 'title',
        favouriteFood: 'food',
        photoURL: 'picture'
      }
    }

    mockedAxios.get.mockResolvedValue(data)

    const { queryByTestId } = render(<Profile />);
    const element = queryByTestId('element')

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:4000/users/1');

    await waitFor(() => {
      expect(element?.textContent).toContain('John Doe');
    })

  });
});
