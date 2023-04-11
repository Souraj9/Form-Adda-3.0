import {Avatar, Box, Chip} from "@mui/material";
import React,{Component} from "react";

export function Chips() {

    return(    <>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', p: 1, m: 1, overflowY: 'scroll', whiteSpace: 'nowrap',
                '::-webkit-scrollbar': { width: '1px', height: '1px' },
                '::-webkit-scrollbar-thumb': { backgroundColor: '#fff', borderRadius: '1px' }}} >

                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>T</Avatar>} label="Trending" onClick={()=>{
                    alert("Hello World")}
                } />
                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>D</Avatar>} label="Defence" onClick={()=>{
                    alert("Hello World")}
                } />
                <Chip variant="outlined" color="primary" avatar={<Avatar>R</Avatar>} label="Railways" onClick={()=>{
                    alert("Hello World")}
                } />
                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>S</Avatar>} label="SSC" onClick={()=>{
                    alert("Hello World")}
                }/>

                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>S</Avatar>} label="SSC" onClick={()=>{
                    alert("Hello World")}
                }/>
                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>S</Avatar>} label="SSC" onClick={()=>{
                    alert("Hello World")}
                }/>
                <Chip variant="outlined" color="primary" size="medium" avatar={<Avatar>S</Avatar>} label="SSC" onClick={()=>{
                    alert("Hello World")}
                }/>

            </Box>
        </>)
    }
