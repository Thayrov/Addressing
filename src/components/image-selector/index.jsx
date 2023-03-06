import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, Text, View } from 'react-native';

import colors from '../../utils/colors';
import { styles } from './styles';
import { useState } from 'react';

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Insufficient permits', 'Need permits to use camera.', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Select image" color={colors.secondary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
