import { LandingPage } from "../LandingPage/LandingPage"
import {useState} from 'react'
import Dices from "/images/Dices.png"

export const GamePage = () => {

   const [LandingPages, SetLandingPage] = useState(false);

   if(LandingPages){ return <LandingPage/>}


    return <div className="flex justify-center w-1182 h-522 translate-y-1/4 translate-x-custom-1 ">
        <div className="w-591">
    <img src={Dices} className="h-522 w-591"></img>
        </div>
        <div className="w-591 bg-white">
            <h1 className="font-bold text-6xl translate-y-custom2">DICE GAME</h1>
            <button className="translate-y-custom2 bg-black text-white px-9 py-2" onClick={()=>{SetLandingPage(true)}}>Play Now</button>
        </div>
        <div></div>
    </div>
}