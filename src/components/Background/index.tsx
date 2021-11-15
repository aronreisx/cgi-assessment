import React, { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../styles/global';

type BackgroundProps = {
  children: ReactNode;
}

export function Background({children}: BackgroundProps) {
  const { primary80, primary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[primary80, primary100]}
    >
      {children}
    </LinearGradient>
  )
}
