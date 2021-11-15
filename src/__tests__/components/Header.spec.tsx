import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Header } from '../../components/Header';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedGoBack
    })
  }
});

describe('SearchBar Test', () => {
  it('should be able to render with setted title prop', () => {
    const { getByText } = render(<Header title='Bazinga!'/>);
    expect(getByText('Bazinga!')).toBeTruthy();
  });

  it('should be able to call goBack function on press', () => {
    const { getByTestId } = render(<Header title='Bazinga!'/>);

    const buttonGoBack = getByTestId('button-go-back');
    fireEvent.press(buttonGoBack);

    expect(mockedGoBack).toHaveBeenCalled();
  })
});
