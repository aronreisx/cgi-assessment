import { StyleSheet } from 'react-native';
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },
  image: {
    borderRadius: 4,
    marginRight: 20,
    width: 64,
    height: 96
  },
  heading: {
    width: 220,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.secondary10
  },
  infoBlock: {
    flexDirection: 'row',
  },
  infoColumn: {
    flexDirection: 'column',
    marginRight: 12
  }
})
