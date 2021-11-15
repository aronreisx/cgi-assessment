import { StyleSheet } from 'react-native';
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  title: {
    color: theme.colors.secondary20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.secondary20,
    fontSize: 13,
  }
});
