import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ImageSelector, LocationSelector } from '../../components';

import colors from '../../utils/colors';
import { savePlace } from '../../store/place.slice';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);

  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(savePlace(title, image, coords));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };
  const onImage = (uri) => {
    setImage(uri);
  };
  const onLocation = (location) => {
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Name of the place"
          onChangeText={onHandlerChange}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />

        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Save"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
