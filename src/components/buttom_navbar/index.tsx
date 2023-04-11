import React, {Component, useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction, CircularProgress, Paper} from '@mui/material';
import latestJob from './../../util/latest_job.json'

import {LatestJob} from "../../pojo/latestJob";
import {Cards} from "../cards/Cards";
import {useAppDispatch} from "../../state/store/store";
import {add} from "../../state/reducers/latestJobReducer";



export function BottomAppBar(props:any) {

 const [count,setCount]=useState<boolean>(false);
 const [value,setValue]=useState<LatestJob[]>([]);

    const dispatch = useAppDispatch()


 async function newArray(): Promise<LatestJob[]> {
     console.log("new array")
     let myArray: LatestJob[] = [];
     await latestJob.data.map((item: any, index: number) => {
         myArray.push(new LatestJob(item.job_id, item.job_category_type, item.job_type, item.job_name,
             item.job_description, item.job_application_start_date, item.job_application_last_date,
             item.job_eligibility_by_gender, item.job_eligibility_by_cast, item.job_registration_link,
             item.job_notification_link, item.job_eligibility_by_education));
     });

     return myArray;
 }


 useEffect( () => {

     //todo :  call action and store the api response in global state
let latestJobs = newArray();
latestJobs.then(data=>{
    console.log("data",data);
    dispatch(add(data));
    setCount(true);
})

         // console.log(newArray)

     }
 ,[]);





// //     let MyPage = ():any => {
// // if (count == 0){
// //    return (<>
//        <div style={{
//            display: "flex",
//            flexDirection: "row",
//            flexWrap: "wrap",
//            padding: "20px",
//            margin: "20px",
//            gap: "50px",
//            justifyContent: "center",
//            alignItems: "center",
//            position: "relative",
//            bottom: "30px",
//        }}>
//        <Cards value={value}/>
//        </div>
//    </> );
//         }else {
//    return  <h1>
//       dmeo
//    </h1>
// }
//      }




   // const  api = async ():Promise<any> => {
   //      fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40")
   //
   //          .then(async (response) => {
   //              let k = JSON.stringify(await response.json());
   //              setValue(JSON.parse(k))
   //
   //          })}




    const handleChange = (event:any, newValue:any) => {
        setCount(newValue);

    };

        return (
            <>
                {/*<div>{value.length === 0 ? <CircularProgress color="success" sx={{alignSelf:"center"}}/> : <MyPage />}</div>*/}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "20px",
                    margin: "20px",
                    gap: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    bottom: "30px",
                }}>
                    {/*{count===false?<CircularProgress/>:      <Cards/>}*/}
                    <Cards/>
                </div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                    <BottomNavigation showLabels sx={{ backgroundColor: 'blue' }} value={value} onChange={handleChange}>
                        <BottomNavigationAction label="Latest Job" sx={{ color: 'white' }} />
                        <BottomNavigationAction label="Admit Card" sx={{ color: 'white' }} />
                        <BottomNavigationAction label="Result" sx={{ color: 'white' }} />
                        <BottomNavigationAction label="Search Job" sx={{ color: 'white' }} />
                    </BottomNavigation>
                </Paper>
            {/*</CircularProgress>*/}
           </>
        )
    }
