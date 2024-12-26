import { Rules } from "./Rules";
import { useState } from "react";
import Dice1 from "/images/Dice1.png"
import Dice2 from "/images/Dice2.png"
import Dice3 from "/images/Dice3.png"
import Dice4 from "/images/Dice4.png"
import Dice5 from "/images/Dice5.png"
import Dice6 from "/images/Dice6.png"



export const Hero = ({Score, SetScore,MySelectedNumber}) =>{
  let x;
  const [ShowRule, SetShowRule] = useState(false);

  const ImgArray = [Dice1,Dice2,Dice3,Dice4,Dice5,Dice6];
  
  const [srcImg,SetsrcImg] = useState(Dice1);
 
const ImageHandler = ()=>{
   x = Math.floor((Math.random() * 6) );
   SetsrcImg(ImgArray[x]);  
  
   if(MySelectedNumber == null){return}
   if(MySelectedNumber == x+1){
    SetScore((score)=>  score + x+1);
  }
  else{
    SetScore((score)=> score -2)
  }
}



return <div className="flex justify-center w-250 h-450">
    <div className="w-250 h-450 items-center">
        <img className="w-250 h-208" src={srcImg} alt="Dice" onClick={ImageHandler}></img>
        <div className="p-2 translate-x-10">Click on Dice to roll</div>
        <button onClick={()=>{ SetScore(0)}} className="p-3 translate-x-10 shadow-md">Reset Score</button>
        <br/>
        <br/>
        
        <button onClick={() =>{SetShowRule(ShowRule => !ShowRule)}} className="bg-black text-white p-3 translate-x-10 shadow-md">Show Rules</button>
        <br/>
        <br/>
        
        <div className='flex justify-center'>{ShowRule && <Rules/>}</div>
    </div>
    
</div>

}