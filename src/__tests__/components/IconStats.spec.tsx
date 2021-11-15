import React from 'react';
import { render } from 'react-native-testing-library';

import { IconStats } from '../../components/IconStats';

describe('IconStats Test', () => {
  it('should able to render the property information', () => {
    const { getByTestId, debug } = render(
      <IconStats icon='star' color='red' information='Hello'/>
    );
    expect(getByTestId('icon-stats')).toBeTruthy();
  });
});
