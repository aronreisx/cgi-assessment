import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { HeaderProps } from '../../types/global';

export function Header({ title }: HeaderProps){
  const { primary100, primary40 } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[primary100, primary40]}
    >
      <BorderlessButton testID='button-go-back' onPress={handleGoBack}>
        <Feather name="arrow-left" size={25} color={theme.colors.secondary10} />
      </BorderlessButton >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.helper}/>
    </LinearGradient>

  )
}

