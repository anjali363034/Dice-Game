import { useState } from "react";
import { Button1} from "./Button"

export const Navbar = ({Score,SetScore, MySelectedNumber,SetMySelectedNumber}) =>{
  
  const arrayNumber =[1,2,3,4,5,6];


    return <div className="w-1280 h-151 translate-x-40 flex justify-between">
            <div className="w-591 ">
                <ul>
                    <li className="font-bold text-4xl translate-y-4">{Score}</li>
                    <li className="translate-y-10">Total Score</li>
                </ul>
            </div>
            <div className="w-591">
                <div className="flex justify-center gap-8 h-75 ">
                <div>  {arrayNumber.map((value,index) =>{ return <Button1 Number ={value} key={index} isSelect={value == MySelectedNumber} onClick={()=>  SetMySelectedNumber(value) }
                /> })} </div>
                
                </div>
                
                <div className="translate-x-custom-1">{MySelectedNumber == null ?"Please first select a number":""}</div>
            </div>
    </div>
}



