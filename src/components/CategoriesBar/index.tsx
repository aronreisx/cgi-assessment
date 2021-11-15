import React from 'react';
import { View } from 'react-native';
import { Category } from '../Category';
import { styles } from './styles';

import { useMoviesCategory } from '../../hooks/useMoviesCategory'

export function CategoriesBar() {
  const { handleMoviesCategory } = useMoviesCategory();

  return (
    <View style={styles.container}>
      <Category
        title='Popular'
        icon='heart-outlined'
        handler={()=>handleMoviesCategory('popular')}
      />
      <Category
        title='Top Rated'
        icon='star-outlined'
        handler={()=>handleMoviesCategory('top_rated')}
      />
      <Category
        title='Upcoming'
        icon='calendar'
        handler={()=>handleMoviesCategory('upcoming')}
      />
    </View>
  )
}
