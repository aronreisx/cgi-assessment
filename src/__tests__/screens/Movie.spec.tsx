import React from 'react';
import { render } from 'react-native-testing-library';

import { Movie } from '../../screens/Movie';

let mockedMovies = {
  id: 1,
  title: "The Net",
  release_date: '2007',
  vote_count: 35,
  vote_average: 16,
  popularity: 27,
  poster_path: "http://dummyimage.com/100x100.png/dddddd/000000"
}

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useRoute: () => ({
      params: {
        movie: mockedMovies
      }
    }),
    useNavigation: () => {
      goBack: mockedGoBack
    }
  }
});

describe('Movie Test', () => {
  it('should be able to render movie title', () => {
    const { getByText } = render(<Movie/>);
    expect(getByText('The Net')).toBeTruthy();
  });
});
