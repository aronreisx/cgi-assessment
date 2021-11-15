import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Genre } from '../../components/Genre';

describe('SearchBar Test', () => {
  it('should be able to render with setted name props', () => {
    const { getByText } = render(<Genre name='Bazinga!'/>);
    expect(getByText('Bazinga!')).toBeTruthy();
  });
});
