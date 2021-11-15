import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';

import { Background } from '../../components/Background';

const MokedChildren = () => <Text>Children text</Text>

describe('Background Test', () => {
  it('should able to render children properly', () => {
    const { getByText } = render(
      <Background>
        <MokedChildren/>
      </Background>
    );
    expect(getByText('Children text')).toBeTruthy();
  });
});
