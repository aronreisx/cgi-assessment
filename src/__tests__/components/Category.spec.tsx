import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Category } from '../../components/Category';

const mockedCategoryHandler = jest.fn();

describe('Category Test', () => {
  it('should able to render the component', () => {
    const { getByTestId, debug } = render(
      <Category
        title='Aloha'
        icon='calendar'
        handler={mockedCategoryHandler}
      />
    );

    expect(getByTestId('category')).toBeTruthy();
  });

  it('should fire an event on pressing', () => {
    const { getByTestId } = render(
      <Category
        title='Aloha'
        icon='calendar'
        handler={mockedCategoryHandler}
      />
    );

    fireEvent.press(getByTestId('category'));
    expect(mockedCategoryHandler).toHaveBeenCalled();
  });
});
