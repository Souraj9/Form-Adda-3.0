import {configureStore} from "@reduxjs/toolkit";
import latestJobReducer from "../reducers/latestJobReducer";
import admitCardReducer from "../reducers/admitCardReducer";
import resultReducer from "../reducers/resultReducer";
import  {useDispatch,useSelector,TypedUseSelectorHook} from "react-redux";


export const store = configureStore({
   reducer:{
     latestJob : latestJobReducer,
     admitCard : admitCardReducer,
     result : resultReducer,

   }
 })



export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;