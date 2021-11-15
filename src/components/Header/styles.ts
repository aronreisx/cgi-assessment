import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    height: 74 + getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.sizes.screenHorizontalSpace,
    paddingTop: getStatusBarHeight()
  },
  title: {
    fontSize: 20,
    color: '#DDE3F0'
  },
  helper: {
    width: 25
  }
})
