import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function Appbar() {
    const navigate = useNavigate()

        return <div className="flex justify-between sm:justify-center h-16 px-10 shadow items-center mt-10">


            <div className="flex items-center">
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer" style={{fontFamily: 'Cookie', fontSize: "50px", color: 'white'}}
                onClick={() => {
                    navigate("/")
                }}
                >Home</h1>
                <div className="hidden md:flex justify-around space-x-4"></div>
            </div>

        </div>
}
export default Appbar;
