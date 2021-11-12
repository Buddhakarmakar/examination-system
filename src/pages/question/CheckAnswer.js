import React from 'react'
import  data  from "./data"
export default function CheckAnswer() {

    
    let result = 0;
    for (let i=0;i<data.length;i++){
        for (let j=0;j<data[i].options.length;j++){
            if(data[i].options[j].isCorrect && data[i].options[j].isSelected)
            {
                result ++
            }
           
        }
    }
    
    return (
        <div className="container"> 
            <h3> Your score is : {result}</h3>
            <h4>Wrong answer:{data.length -result}</h4>
            <hr/>
            
            
        </div>
        
    )
}
