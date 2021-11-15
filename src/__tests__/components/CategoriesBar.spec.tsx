import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { CategoriesBar } from '../../components/CategoriesBar';

const mockedHandleMoviesCategory = jest.fn()

jest.mock('../../hooks/useMoviesCategory', () => {
  return {
    useMoviesCategory: () => ({
      handleMoviesCategory: mockedHandleMoviesCategory
    })
  }
})

describe('CategoriesBar Test', () => {
  it('should able to render components Category', () => {
    const { getAllByTestId } = render(<CategoriesBar/>);
    expect(getAllByTestId('category').length).toBe(3);
  });

  it('should able to render components Category', () => {
    const { getAllByTestId } = render(<CategoriesBar/>);
    const categories = getAllByTestId('category')
    categories.map((category) => {
      fireEvent.press(category);
    });
    expect(mockedHandleMoviesCategory).toHaveBeenCalledTimes(3);
  });
});
