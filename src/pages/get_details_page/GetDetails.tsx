import React, {Component, useEffect, useState} from "react";
import {Button, CircularProgress, FormControlLabel, Switch} from "@mui/material";
import {redirect,useLocation, useNavigate} from "react-router-dom";
import {LatestJob} from "../../pojo/latestJob";




export function GetDetails(props:any){

    const location=useLocation();
    const navigate = useNavigate();
    const [redirect,setRedirect]=useState<boolean>(true);
    const [checked,setChecked]=useState<boolean>(false);

   var de=null;
    useEffect(()=> {
        console.log("printing getdetail")
if(location.state===undefined||location.state===null) {

    navigate("/")
    // setRedirect(false);

}
else {
    const data:LatestJob=location.state;

    console.log(location);
    // setData(data);
    setRedirect(false);
}
    },[]);
    const changeState = (event: React.ChangeEvent<HTMLInputElement>): any => {
        if(event.target.checked==true) {
            localStorage.setItem(data.job_id,JSON.stringify(data));
        }
        setChecked((prev) => {
            console.log(event.target.checked);

            return !prev;
        });
    };
    let data:LatestJob=location.state;
    return (
         redirect===false?


            <>
                <div  className="flex flex-col justify-center items-center ">
              <h1>Get notification </h1>      <FormControlLabel
                        control={<Switch  value={checked} color="success" onChange={(event)=>changeState(event)}
                         />}label=""/>
                </div>
                <div className="flex flex-col justify-center items-center h-[100vh]">
                    <div
                        className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%]
                         mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                        <div className="mt-2 mb-8 w-full">
                            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                                Job Description <br/>
                                {data.job_name}
                            </h4>
                            <p className="mt-2 px-2 text-base text-gray-600">
                                {data.job_description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 px-2 w-full">
                            <div
                                className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Qualification</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    {data.job_eligibility_by_education}
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Age</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    {/*min: {detail.job_eligibility_by_age.min}*/}
                                    <br/>
                                    {/*max:{detail.job_eligibility_by_age.max}*/}
                                </p>
                            </div>

                            <div
                                className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Department</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    Product Design
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Work History</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    English, Spanish, Italian
                                </p>
                            </div>

                            <div
                                className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Organization</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    Simmmple Web LLC
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Birthday</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    20 July 1986
                                </p>
                            </div>

                        </div>
                        <div  className=" flex justify-center 	items-center mt-6 ">
                     <Button href={data.job_notification_link} target="_blank" style={{display:"flex",alignItems:'center'}}
                             variant={"contained"}  > Download Admit Card

                                </Button>

                        </div>
                        <div className=" flex justify-center 	items-center mt-6 ">
                            <Button href={data.job_registration_link}
                                    target="_blank" style={{display:"flex",alignItems:'center'}} variant={"contained"}  > Apply Online

                            </Button>
                        </div>

                    </div>
                </div>

            </>
:<CircularProgress/>
        )

}