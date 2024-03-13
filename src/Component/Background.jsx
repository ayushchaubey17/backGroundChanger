import React, { useState } from 'react'

export default function Background() {

    let [bg, setBg] = useState("bg-blue-200");

        let changeRed = () =>{
          setBg("bg-red-700");
        }


        let changeYellow = () =>{
            setBg("bg-yellow-500");
          }
          let changeBlue = () =>{
            setBg("bg-blue-700");
          }
          let changeGreen = () =>{
            setBg("bg-green-700");
          }
    

          let changeDark = () =>{
            setBg("bg-black");
          }
    
          let changeWhite = () =>{
            setBg("bg-white");
          }
    




  return (
    <div className={`flex justify-center h-screen ${bg}`}>
       <div className="bottom-2   fixed   space-x-4 sm:space-x-8 mx-auto">
        <button onClick={changeRed} className="p-2 rounded-md text-white font-bold bg-red-500">Red</button>
        <button onClick={changeYellow}  className="p-2 rounded-md text-white font-bold bg-yellow-600">Yellow</button>
        <button onClick={changeBlue} className="p-2 rounded-md text-white font-bold bg-blue-600">Blue</button>
        <button onClick={changeGreen} className="p-2 rounded-md text-white font-bold bg-green-600">Green</button>
        <button onClick={changeDark} className="p-2 rounded-md text-white font-bold bg-gray-800">Dark</button>
        <button onClick={changeWhite} className="p-2 rounded-md text-black font-bold bg-gray-200">white</button>
        
        </div>
    </div>
  )
}

