import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../styles/global";

const containerSeparator = 8;
const marginVertical = 24;
const categoryWidth = (Dimensions.get('window').width - (marginVertical * 2 + containerSeparator * 2)) / 3;

export const styles = StyleSheet.create({
  container: {
    width: categoryWidth,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  content: {
    width: categoryWidth - 4,
    height: 116,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.secondary10,
    fontSize: 15,
    marginTop: 15
  },
})
