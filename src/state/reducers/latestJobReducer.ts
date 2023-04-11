import {createSlice} from "@reduxjs/toolkit";
import {LatestJob} from "../../pojo/latestJob";

 interface LatestJobState{
 latestJobList:LatestJob[];
}
const initialState:LatestJobState ={
latestJobList:[]
}



const latest = createSlice({
    name : "datas" ,
    initialState ,

    reducers : {
        add(state,action){
            
         state.latestJobList.push(...action.payload);
        }
    }
})


export default latest.reducer;
export const {add} =latest.actions ;