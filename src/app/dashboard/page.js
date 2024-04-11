"use client"
import React from 'react'
import { useState, useRef } from 'react';
import Modalbox from '../components/Modal.js';



function Dashboared() {

    const [first, setfirst] = useState(true)
    const ref = useRef()

    return (
        <>
        <div ref={ref} onClick={()=>{setfirst(!first); ref.current.style.Zindex="-1"}} className="font-sans flex items-center justify-center w-32 h-14 bg-[#6056B6] rounded-full text-white text-2xl font-semibold hover:cursor-pointer">Login</div>
        {first && <Modalbox/>}
        </>
    )
}

export default Dashboared