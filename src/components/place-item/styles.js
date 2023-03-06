import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: (55 * 16) / 9,
    height: 55,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
});
