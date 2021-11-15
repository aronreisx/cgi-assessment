import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { IconStats } from '../IconStats';

import { styles } from './styles';

import { MovieCardProps } from '../../types/global';

export function MovieCard(
  {
    title,
    release,
    voteCount,
    rating,
    populatiry,
    posterURI,
    handleMovieCard,
    ...rest
  }: MovieCardProps) {
  return (
    <RectButton
      {...rest}
      testID='movie-card-button'
      style={styles.container}
      onPress={handleMovieCard}
    >
      <Image
        accessibilityLabel={`${title}-backdrop`}
        style={styles.image}
        source={{
          uri: posterURI,
        }}
      />
      <View>
        <View style={styles.heading}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.infoColumn}>
            <IconStats icon='heart' information={populatiry} color='red'/>
            <IconStats icon='calendar-blank' information={release} />
          </View>
          <View style={styles.infoColumn}>
            <IconStats icon='star' information={rating} color='yellow'/>
            <IconStats icon='vote-outline' information={voteCount} />
          </View>
        </View>
      </View>
    </RectButton>
  )
}
