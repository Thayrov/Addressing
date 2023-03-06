import { Text, View } from 'react-native';

import { styles } from './styles';
import { useSelector } from 'react-redux';

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);
  console.warn(places);

  return (
    <View style={styles.container}>
      <Text>Place List</Text>
    </View>
  );
};

export default PlaceList;
