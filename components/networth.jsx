"use client";
import { useState } from "react";
import NetworthGraph from "./NetworthGraph";
import { MenuItem,  InputLabel, FormControl, Select } from "@mui/material";

function NetWorth() {
    const [period, setPeriod] = useState("Month");

    const handleChange = async (e) => {
        setPeriod(e.target.value);
    };

    return (
        <div className="box w-3/5 flex-col">
            <div className="flex-row flex-between w-full mb-4">
                <div className='flex flex-col'>
                    <span className='text-white text-5xl'>$1000</span>
                    <span className='text-gray-400 text-xl'>current</span>
                </div>
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
            <NetworthGraph/>
        </div>
    );
}

export default NetWorth;