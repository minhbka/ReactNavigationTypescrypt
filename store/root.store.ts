import { imageActions, imagesReducer } from "./images";
import { configureStore } from '@reduxjs/toolkit/src/configureStore';
import { useSelector , TypedUseSelectorHook} from "react-redux";
export const actions = {
  image: imageActions
}

const reducers = {
  image:imagesReducer
}

export const store = configureStore({
  reducer:reducers,
  enhancers:[],
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;