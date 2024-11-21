import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function CardDetailPage() {
    const navigate=useNavigate();
  const location = useLocation();
  const { card } = location.state || {};
  const [cards, setCards] = useState([]);

  if (!card) {
    return <p className="text-center text-gray-500 mt-10">No card data available.</p>;
  }
const goToCardBuy=(crad)=>{
    navigate('/cradbuy',{state:{card}})
}


  return (
    <div className="p-6 flex justify-center">
      <div
        key={card.id}
        className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 flex flex-col max-w-md w-full"
      >
        {/* Card Image */}
        <img
          src={card.card_image}
          alt={card.title}
          className="w-full h-[200px] object-cover rounded-lg mb-4"
        />

        {/* Card Content */}
        <div className="flex-1">
          <h2 className="font-bold text-2xl text-gray-900 mb-2">{card.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Location: {card.location}</p>
          <p className="text-gray-600 text-sm mb-4">{card.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <progress
            value={(card.get_price / card.total_price) * 100}
            max="100"
            className="w-full h-2 rounded bg-gray-200"
          ></progress>
          <p className="text-sm mt-2 text-gray-700">
            <span className="text-green-600 font-bold">${card.get_price}</span> raised of $
            {card.total_price}
          </p>
        </div>

        {/* Additional Details */}
        <div className="mt-4 text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Security Type:</span>
            <span>{card.security_type}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Investment Multiple:</span>
            <span>{card.investment_multiple}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Maturity:</span>
            <span>{card.maturity}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Min Investment:</span>
            <span>{card.min_investment}</span>
          </div>
        </div>
        <button onClick={()=>goToCardBuy(card)} className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-medium">
              Buy
            </button>
      </div>
    </div>
  );
}

export default CardDetailPage;
