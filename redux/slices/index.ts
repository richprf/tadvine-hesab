import { combineSlices } from "@reduxjs/toolkit";
import searchSlice from "./search";


const rootReducer = combineSlices( searchSlice ) ;

export default rootReducer;