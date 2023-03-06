import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from '../screens/index';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.tertiary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: 'Addresses',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
              <MaterialIcons name="add-location" size={28} color={colors.tertiary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Address's details" }}
      />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} options={{ title: 'New Address' }} />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: 'Map' }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
