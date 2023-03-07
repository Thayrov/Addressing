import MapView, { Marker } from 'react-native-maps';
import { useLayoutEffect, useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import { styles } from './styles';

const Maps = ({ navigation, route }) => {
  const { coords } = route.params;

  const initialRegion = {
    latitude: coords?.lat,
    longitude: coords?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [selectedLocation, setSelectedLocation] = useState(null);

  const onHandlerPickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandlerSaveLocation = () => {
    if (selectedLocation) navigation.navigate('NewPlace', { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity disabled={!selectedLocation} onPress={onHandlerSaveLocation}>
          <MaterialIcons
            name="save"
            size={20}
            color={!selectedLocation ? colors.gray : colors.tertiary}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandlerSaveLocation]);
  return (
    <MapView
      initialRegion={initialRegion}
      onPress={onHandlerPickLocation}
      style={styles.container}
      minZoomLevel={14}>
      {selectedLocation && (
        <Marker
          title="Location selected"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
