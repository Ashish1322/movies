import {useState} from "react"
export default function OtpGenerator()
{
    const [otp,setOtp] = useState(34567)
    function generateOtp()
    {
     setOtp( 10000 + Math.floor(Math.random()*10000) )
      
    }
  
    return (
     <div  style={{textAlign:"center"}}>
      <h1>OTP Generator</h1>
      <p >OTP  is  : {otp} </p>
      <button onClick={generateOtp}>Generate OTP</button>
     </div>
    )
}