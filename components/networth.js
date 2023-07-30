import React, { useState } from "react";
import './networth.css';
import tempgraph from '../images/graphnetworth.png';
import { MenuItem,  InputLabel, FormControl, Select } from "@mui/material";

function NetWorth() {
    const [period, setPeriod] = useState("Month");

    const handleChange = (e) => {
        setPeriod(e.target.value);
    };

    return (
        <div className="networthfull">
            <div className="topcard">
                <h1 className="cardtitle">Net Worth</h1>
                <FormControl sx={{ m: 0, minWidth: 120}}>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper-label"
                        value={period}
                        onChange={handleChange}
                        labelStyle={{ color: '#ff0000'}}
                        style={{ height: '50px'}}
                        sx={{
                            color: "white",
                                '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '.MuiSvgIcon-root ': {
                                fill: "white !important",
                                }
                        }}
                    >
                        <MenuItem value="Month">this month</MenuItem>
                        <MenuItem value="Week">this week</MenuItem>
                        <MenuItem value="Year">this year</MenuItem>
                        <MenuItem value="Alltime">all time</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <img src={tempgraph} alt="Graph"/>
        </div>
    );
}

export default NetWorth;