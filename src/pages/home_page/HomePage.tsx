import React, {Component, useEffect} from "react";
import {SearchBar} from "../../components/searchbar/SearchBar";
import {Chips} from "../../components/chips/Chips";
import {BottomAppBar} from "../../components/buttom_navbar";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {GetDetails} from "../get_details_page/GetDetails";
import {useDispatch} from "react-redux";

export function HomePage(props:any) {
const d=useDispatch()
// useEffect(()=>{
//     d()
// })
    return(
        <>
            <SearchBar/>
            <Chips/>
            <BottomAppBar/>

        </>
    )
}