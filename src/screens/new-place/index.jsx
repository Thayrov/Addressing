import { Button, ScrollView, Text, TextInput, View } from 'react-native';

import { addPlace } from '../../store/place.slice';
import colors from '../../utils/colors';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(addPlace({ title }));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
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
