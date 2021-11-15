import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Home } from '../../screens/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  }
});

let mockMovies = [{
  id: 1,
  title: "The Net",
  release_date: '2007',
  vote_count: 35,
  vote_average: 16,
  popularity: 27,
  poster_path: "http://dummyimage.com/100x100.png/dddddd/000000"
}]

jest.mock('../../hooks/useMovies', () => {
  return {
    useMovies: () => ({
      movies: mockMovies
    })
  }
})

describe('Home Test', () => {
  it('should be able to render the search input', () => {
    const { getByPlaceholder } = render(<Home/>);
    expect(getByPlaceholder(/search/i)).toBeTruthy();
  });

  it('should fire an event on pressing MovieCard', () => {
    const { getByTestId } = render(<Home/>);
    fireEvent.press(getByTestId('movie-card-button'))
    expect(mockedNavigate).toBeCalled();
  });
});
