import React from 'react'
import { useNavigate } from 'react-router-dom'
type Props = {}

const PaymentSuccess = (props: Props) => {
    const navigate = useNavigate();
  return (

        <div className="flex flex-col h-screen bg-gray-100">
  <div className="bg-rgb(251, 74, 4) p-4 text-white flex justify-between items-center">
    <button className="text-orange-600 font-bold hover:text-orange-400" onClick={()=>{navigate('/')}}>Go Back</button>
  </div>
  <div className="flex justify-center items-center mt-8">
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
      <div className="text-center mb-6">
        <img src="https://via.placeholder.com/150" alt="Success Icon" className="w-24 h-24 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-orange-600">Payment Successful</h2>
        <p className="text-gray-600 text-lg">Thank you for your payment.</p>
      </div>
      <div className="text-center">
        <button className="px-4 py-2 font-bold text-white bg-orange-600 rounded-full hover:bg-orange-400 focus:outline-none focus:shadow-outline">
          View Receipt
        </button>
      </div>
    </div>
  </div>
</div>



  )
}

export default PaymentSuccess