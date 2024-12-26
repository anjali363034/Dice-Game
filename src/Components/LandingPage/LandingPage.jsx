import {Navbar} from './Navbar'
import {Hero} from './Hero'
import { useState } from 'react'

export const LandingPage = ()=>{

  const [Score, SetScore] = useState(0);
  const [MySelectedNumber, SetMySelectedNumber] = useState(null);
  

    return <div className=" h-screen">
        <Navbar Score={Score} SetScore={SetScore} MySelectedNumber={MySelectedNumber} SetMySelectedNumber={SetMySelectedNumber}/>
        <div className='flex justify-center'>
        <Hero Score={Score} SetScore={SetScore} MySelectedNumber={MySelectedNumber}/>
        </div>
      
    </div>
}

export default LandingPage