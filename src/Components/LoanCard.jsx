import axios from "axios"
import { Button, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const LoanCard=()=>{
    const [data,setData]=useState([])
useEffect(()=>{
    axios
    .get("https://money-mentor.onrender.com/Banks")
    .then((res)=>{
          
        setData(res.data)
    })
},[])



    return (<div >
       
       { data.map((el)=>(
       <div style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",margin:"10px",textAlign:"center",justifyContent:"space-around",display:"flex",alignItems:"center",flexWrap:"wrap"}}>
        <img src={el.image} alt="" />
       <h1 style={{width:"200px"}}>{el.interest}%</h1>
       <p style={{width:"200px"}}>Rs. {el.amount}</p>
       
       <p style={{width:"200px"}}>Rs.{Math.ceil(el.amount/36)}</p>
       <p style={{width:"200px"}} >{el.extra.map((el)=>(<li>{el}</li>))}</p>
       {/* {el.extra.map((el)=>(<p>{el}</p>))} */}
       
       <Button

            padding="5px 12px 5px 12px"
            border={"1px solid skyblue"}
            borderRadius="20px"
            color="skyblue   "
          >
            Apply
          </Button>
       </div>
       ))}

       
    </div>)
}