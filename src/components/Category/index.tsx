import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../styles/global';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { CategoryProps } from '../../types/global';

export function Category({title, icon, handler }: CategoryProps) {
  const { primary50, primary70, primary85 } = theme.colors;
  return (
    <RectButton onPress={handler} testID='category'>
      <LinearGradient
        style={styles.container}
        colors={[primary50, primary70]}
      >
        <LinearGradient
          style={styles.content}
          colors={[primary85, primary50]}
        >
          <Entypo name={icon} size={38} color={theme.colors.secondary10} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}
