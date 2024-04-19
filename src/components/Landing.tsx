import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {
    PushSpinner, TraceSpinner, RainbowSpinner,
    RingSpinner, SwishSpinner, PongSpinner,
    MetroSpinner, JellyfishSpinner
}
    from "react-spinners-kit";

interface stockInterface {
    symbol: String; 
    open: Number
}

const Landing = () => {

    const [stocks, setStocks] = useState<any[]>([]); 
    const [count, setCount] = useState<any[]>(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ])
    const [number, setNumber] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const navigate = useNavigate(); 

    const getStocks = async () => {
        
        const response = await axios.post(`/stock/apis/${number}`); 

        if(response.data.message){ 
            navigate(`/stocks/${number}`); 
        }

    }

    const handleChange = (event: SelectChangeEvent) => {
        setNumber(event.target.value);
        console.log('assigned to :- ' + number);
    };

    return (
        <>

        <div className="flex flex-grow items-center justify-center"> 
                <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg text-gray-200 mt-12 w-11/12 sm:w-96 lg:w-auto">
                    <div className="flex items-center mb-6">
                        <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h4 className="font-semibold ml-3 text-lg" style={{fontFamily: 'Cookie', fontSize: "25px", color: 'white'}}>Enter the desired number of stocks</h4>
                    </div>


            <div className='flex justify-between'>

                <div className="mr-2 ml-2">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">No. of Stocks</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={number}
                    onChange={handleChange}
                    label="No. of stocks"
                    >
                    { 
                        count.map((user, index) => (
                            <MenuItem value={user}>{user}</MenuItem>
                        ))                        
                    }
                    </Select>
                </FormControl>

                </div>
                
                <div>
                <button 
                    onClick={async () => {
                        setLoading(true); 
                        await getStocks(); 
                    }}
                    className='p-2 mt-4 bg-green-500 rounded-md px-1 text-xs sm:text-base text-white' 
                >Get Stock Updates</button>
                </div>
                </div>

                <div className="spinner flex justify-center mt-5">
                    <JellyfishSpinner size={40} color="white"
                        backColor="white" loading={loading} />
                </div>

                </div>
                </div>
        
        </>
    )
}

export default Landing