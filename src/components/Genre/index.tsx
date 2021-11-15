import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { GenreProps } from '../../types/global';

export function Genre({name, ...rest}: GenreProps) {
  return(
    <Text
      {...rest}
      testID='genre'
      style={styles.text}
    >
      {name}
    </Text>
  )
}
