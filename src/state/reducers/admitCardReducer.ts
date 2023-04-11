import {createSlice} from "@reduxjs/toolkit";
import {LatestJob} from "../../pojo/latestJob";


const initialState ={
    data:[]
}



const admitCard = createSlice({
    name : "admitCard" ,
    initialState ,

    reducers : {

    }
})


export default admitCard.reducer;