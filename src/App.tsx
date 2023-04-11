import React, {useEffect, useState} from 'react';
import './App.css';

import {createBrowserRouter, Route, RouterProvider, Routes, useNavigate} from "react-router-dom";
import * as fs from 'fs';
import latestJob from './util/latest_job.json';
import {GetDetails} from "./pages/get_details_page/GetDetails";
import {HomePage} from "./pages/home_page/HomePage";

import {BrowserRouter as Router} from 'react-router-dom';


function App() {

useEffect(()=>{

})





    const router = createBrowserRouter([
        {
            path: "/",
            element:<HomePage/>,
        },
        {
            path:"/demo",

            element:<GetDetails/>
        }
    ]);
    return (
        <>
            {/*<Router>*/}

            {/*    <Routes>*/}
            {/*        <Route path="/demo" element={<GetDetails />} />*/}
            {/*        <Route path="/" element={<HomePage/> } />*/}

            {/*    </Routes>*/}
            {/*</Router>*/}
            <RouterProvider router={router} />
        </>
    );
}

export default App;

