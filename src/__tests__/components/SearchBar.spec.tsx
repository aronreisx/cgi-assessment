import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { SearchBar } from '../../components/SearchBar';

const mockedSetQueryString = jest.fn()
const mockedHandleMovieSearch = jest.fn()

jest.mock('../../hooks/useMovieSearch', () => {
  return {
    useMovieSearch: () => ({
      setQueryString: mockedSetQueryString,
      handleMoviesSearch: mockedHandleMovieSearch
    })
  }
})

describe('SearchBar Test', () => {
  it('should be able to render the search input', () => {
    const { getByPlaceholder } = render(<SearchBar />);
    expect(getByPlaceholder('Search a movie')).toBeTruthy();
  });

  it('should be able to render the search button', () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId('search-button')).toBeTruthy();
  });

  it('should able to search a movie', () => {
    const { getByPlaceholder, getByTestId } = render(<SearchBar />);

    fireEvent.changeText(getByPlaceholder(/search/i), 'Dune');
    expect(mockedSetQueryString).toHaveBeenCalled();

    fireEvent.press(getByTestId('search-button'));
    expect(mockedHandleMovieSearch).toHaveBeenCalled();
  });
});
