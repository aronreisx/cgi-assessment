import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { ListHeader } from '../../components/ListHeader';

describe('SearchBar Test', () => {
  it('should be able to render with setted props', () => {
    const { getByText } = render(<ListHeader title='Popular' subtitle='300 movies'/>);
    expect(getByText('Popular')).toBeTruthy();
    expect(getByText('300 movies')).toBeTruthy();
  });
});
