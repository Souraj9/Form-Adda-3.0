import {createSlice} from "@reduxjs/toolkit";
import {LatestJob} from "../../pojo/latestJob";


const initialState ={
    data:[]
}



const result = createSlice({
    name : "result" ,
    initialState ,

    reducers : {

    }
})


export default result.reducer;