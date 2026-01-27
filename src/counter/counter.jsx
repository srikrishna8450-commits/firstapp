import { useState } from "react"
function Counter(){
    var [c , fun]= useState(0);
        function Inc(){
           fun(c+1)
        }
        function Dec(){
            if(c>0){
fun(c-1)
            }
            
        }
    return(
        <div className="p-3">
            <h1 style={{color:"green"}}>Counter : {c}</h1>
       <button className="btn btn-outline-success me-2" onClick={() => {Inc()}}>inc</button>
       <button className="btn btn-outline-danger" onClick={() => {Dec()}}>dec</button>
        </div>
    )
}
export default Counter 