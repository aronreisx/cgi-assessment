import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { MovieCard } from '../../components/MovieCard';

const mockHandleMovieCard = jest.fn()

describe('MovieCard Test', () => {
  it('should able to render an image', () => {
    const { getByLabelText } = render(
      <MovieCard
        title='Tenet'
        release='2222'
        voteCount={22}
        rating={22}
        populatiry={22}
        posterURI='image'
        handleMovieCard={mockHandleMovieCard}
      />
    )

    expect(getByLabelText(/backdrop/i)).toBeTruthy();
  });

  it('should fire an event on pressing', () => {
    const { getByTestId } = render(
      <MovieCard
        title='Tenet'
        release='2222'
        voteCount={22}
        rating={22}
        populatiry={22}
        posterURI='image'
        handleMovieCard={mockHandleMovieCard}
      />
    );

    fireEvent.press(getByTestId('movie-card-button'))
    expect(mockHandleMovieCard).toHaveBeenCalled();
  });
});
