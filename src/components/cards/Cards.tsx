import React, {Component, useEffect} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

import {LatestJob} from "../../pojo/latestJob";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function Cards(props:any) {

    const navigation=useNavigate();
const state=useSelector((state:any) => {
    return state.latestJob;
});
    const value:LatestJob[]=state.latestJobList;
    // const value:LatestJob[] = props.value;
    console.log("value",value[0]);
    // console.log("vard",[0].job_name);
    if(value.length === 0) {
        return <h1>empty</h1>
    } else {

        return(
            <div style={{display:"flex", gap: "50px",
                justifyContent: "center",
                alignItems: "center", flexWrap: "wrap"}}>
                {value.map((item: LatestJob, index:number) => {

                    return (
                        <Card key={index} sx={{maxHeight: 250, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <CardActionArea>
                                {/*<CardMedia*/}
                                {/*    component="img"*/}
                                {/*    height="140"*/}
                                {/*    image=""*/}
                                {/*     // src={props.poke[0].url}*/}
                                {/*     alt= ""*/}
                                {/*/>*/}
                                <CardContent>
                                    <Typography gutterBottom variant="h6"  component="div">
                                        {item.job_id }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/*Start Date : {item.job_application_start_date} <br/>*/}
                                        {/*End Date : {item.job_application_last_date} <br/>*/}
                                        {/*Education : {item.job_eligibility_by_education}*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="contained" size="small" color="primary" onClick={()=>{
                                    navigation("/demo",{
                                        state:item
                                    })
                                }}>
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
