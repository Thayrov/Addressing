import * as Location from 'expo-location';

import { Alert, Button, Text, View } from 'react-native';

import MapPreview from '../map-preview/index';
import colors from '../../utils/colors';
import { styles } from './styles';
import { useState } from 'react';

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Need permits to access location', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };
  const onHandlerGetLocation = async () => {
    const isLocationPermitted = await verifyPermissions();
    if (!isLocationPermitted) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}>No location selected</Text>
      </MapPreview>
      <Button title="Select location" onPress={onHandlerGetLocation} color={colors.secondary} />
      <Button title="Select from map" onPress={() => null} color={colors.gray} />
    </View>
  );
};

export default LocationSelector;
