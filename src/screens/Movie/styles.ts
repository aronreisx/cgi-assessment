import { StyleSheet } from 'react-native';
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
      width: '100%',
      height: 234,
    },
    content: {
      marginTop: 20,
      paddingHorizontal: theme.sizes.screenHorizontalSpace
    },
    title: {
      fontSize: 28,
      color: theme.colors.secondary10,
      marginBottom: 14
    },
    information: {
      flexDirection: 'row',
      marginBottom:11
    },
    overview: {
      fontSize:13,
      lineHeight:21,
      color: theme.colors.secondary10,
      paddingBottom: 30
    },
    genres: {
      flexDirection: 'row',
      marginBottom: 14
    }
});
