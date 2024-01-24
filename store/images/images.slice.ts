import { ImageState } from "./images.entity"
import { createSlice } from "@reduxjs/toolkit"
import imagesReducer from "./images.reducer"
export const initialState:ImageState = {
  listImage:[],
}

const imageSlice =  createSlice({
  name:'images',
  initialState:initialState,
  reducers:imagesReducer,
})

export const {actions, reducer} = imageSlice;