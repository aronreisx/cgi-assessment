import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 26,
        paddingHorizontal: theme.sizes.screenHorizontalSpace
    },
    notFound: {
      color: 'white',
      fontSize: 18,
      alignSelf: 'center',
      marginTop: 100
    }
})
