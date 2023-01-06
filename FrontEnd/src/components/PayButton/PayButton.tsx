import React from 'react'
import axios from 'axios'
import Button from '../General/Button'

//This is on hold will use it for future release xoxo

type Props = {}



const PayButton = (props: Props) => {
    const handleCheckout = () =>{

    }

  return (
    <div>
        <Button onClick={()=>handleCheckout()} whileHover={{ background: "#fff", border: "3px solid #FB4A04", color: "#FB4A04" }} width="27.608069164265128vw" height='57px' text="SignUp" style={{ background: "#FB4A04", color: "#fff", marginTop: "25px", minWidth: "100%" }}  />
    </div>
  )
}

export default PayButton