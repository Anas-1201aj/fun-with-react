import React,{useState} from 'react'

function Employees() {
   
    const employees = [
    ["Anas", 50000],
    ["Javed", 60000],
    ["sami", 45000],
    ["ali", 30000],
];

const sortedSalaries = ()=>{
    return (employees).sort((a,b)=> b[1]-a[1])
};

return (
    <>
    <div className="w-full">
        <div className="w-full">
            <h1>Employees</h1>
        </div>
        <div className="w-full">
           {sortedSalaries().map(([key,value])=>(
            <div  key={key}
            className="w-full">
                {key}:{value}
            </div>
           ))}
        </div>
    </div>
    </>
  )
}

export default Employees