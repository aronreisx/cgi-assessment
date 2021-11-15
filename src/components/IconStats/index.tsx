import React from 'react';
import { Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../styles/global'
import { styles } from './styles'

import { IconStatsProps } from '../../types/global';

export function IconStats({icon, information, color}: IconStatsProps) {
  return (
    <Text style={styles.container} testID='icon-stats'>
      <MaterialCommunityIcons name={icon} size={theme.sizes.icon} color={color ? color : theme.colors.secondary10} />
      &nbsp; {information}
    </Text>
  )
}
