import Place from '../models/places';
import { URL_GEOCODING } from '../utils/maps';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now().toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});
export const { addPlace } = placeSlice.actions;

export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) {
        throw new Error("Couldn't connect to geolocation services");
      }

      const data = await response.json();
      if (!data.results) throw new Error("Couldn't find address");

      const address = data.results[0].formatted_address;

      dispatch(addPlace({ title, image, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};
export default placeSlice.reducer;
