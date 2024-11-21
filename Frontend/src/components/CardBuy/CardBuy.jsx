import React from 'react'
import { useLocation,Navigate,useNavigate } from 'react-router-dom'

function CardBuy() {

const location=useLocation();

const {card}=location.state || {};
if (!card) {
    return <p className="text-center text-gray-500 mt-10">No card data available.</p>;
  }

    return (
    <div>
      <h1>crad buy</h1>
      <p>Card price:{card.get_price}</p>
      <button>Make payments</button>
    </div>
  )
}

export default CardBuy
