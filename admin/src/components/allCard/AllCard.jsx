


import { useEffect, useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllCard() {
    const [cards, setCards] = useState([]);
    const [editingCard, setEditingCard] = useState(null);

    useEffect(() => {
        axios.get('https://fliper-invest-backend.onrender.com/api/v1/project/card/get-card')
            .then(cards => setCards(cards.data))
            .catch(err => console.log(err));
    }, []);

    const handleDeleteCard = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/project/card/delete-cards/${_id}`);
            if (response.status === 200 || response.status === 204) {
                const updatedCards = cards.filter(card => card._id !== _id);
                setCards(updatedCards);
                toast.success('Card deleted successfully!');
            } else {
                throw new Error('Failed to delete the card.');
            }
        } catch (error) {
            toast.error('Failed to delete the card.');
        }
    };



    const handleUpdateCard = (card) => {
        setEditingCard(card);  // Set the card to be updated in the state
    };

    const handleSaveUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/project/card/update-cards/${editingCard._id}`, editingCard);
            if (response.status === 200) {
                const updatedCards = cards.map(card => card._id === editingCard._id ? editingCard : card);
                setCards(updatedCards);
                toast.success('Card updated successfully!');
                setEditingCard(null);  // Close the editing form/modal
            } else {
                toast.error('Failed to update card');
            }
        } catch (error) {
            toast.error('Error updating card');
        }
    };

    return (
        <div id='2ndpage' className='w-full flex flex-wrap justify-center'>
            <div className="w-full text-center mb-10">
                <p className="text-3xl font-bold">Offerings Open for Investment</p>
                <p className="font-semibold">
                    Explore pre-vetted investment opportunities available in a growing <br />
                    number of industry categories.
                </p>
            </div>

            {cards.map(card => {
                const totalRaised = card.get_price;
                const totalGoal = card.total_price;
                const percentageRaised = (totalRaised / totalGoal) * 100;

                return (
                    <div id='card' className='w-[22%] h-[550px] ml-6 mt-10 bg-white hover:shadow-xl hover:border-4 hover:border-gray-600 pb-4 flex flex-col justify-between' key={card._id}>
                        {/* Image section */}
                        <div id='img' className='h-[40%] bg-cover bg-slate-500'>
                            <img src={card.card_image} alt="" className="object-cover w-full h-full" />
                            <div className='flex mt-4 ml-4'>
                                <div id='home' className='bg-slate-400 p-2 text-sm'>Home</div>
                                <div id='family' className='bg-slate-400 p-2 text-sm ml-2'>{card.tag}</div>
                            </div>
                        </div>

                        {/* Card Details */}
                        <div id='title' className='p-4 bg-slate-100'>
                            <p className='text-xl font-bold'>{card.title}</p>
                            <p className='mb-2 text-gray-600'>{card.location}</p>
                            <p className="text-sm font-semibold truncate">{card.description}</p>

                            {/* Progress Bar */}
                            <div className='my-3 text-center'>
                                <progress value={percentageRaised} max="100" className="w-[90%]"></progress>
                            </div>

                            <p className="text-green-600">$ {card.get_price} raised of {card.total_price}</p>
                        </div>

                        {/* Additional Info */}
                        <div id="flip" className="px-4 py-2">
                            <hr />
                            <p className="flex justify-between"><span>Security Type</span> <span className="font-semibold">{card.security_type}</span></p>
                            <p className="flex justify-between"><span>Investment Multiple</span> <span className="font-semibold">{card.investment_multiple}</span></p>
                            <p className="flex justify-between"><span>Maturity</span> <span className="font-semibold">{card.maturity}</span></p>
                            <p className="flex justify-between"><span>Min Investment</span> <span className="font-semibold">{card.min_investment}</span></p>
                        </div>

                        {/* Update and Delete Buttons */}
                        <div className='flex'>
                            <button onClick={() => handleUpdateCard(card)} className="h-[36px] mr-36 bg-green-700 text-white text-xl font-semibold hover:bg-green-700"> Update</button>
                            <button onClick={() => handleDeleteCard(card._id)} className="h-[36px] bg-green-700 text-white text-xl font-semibold hover:bg-green-700"> Delete</button>
                        </div>
                    </div>
                );
            })}

            {editingCard && (
            
              
                <div className="modal bg-gray-200 p-8 rounded-lg shadow-lg text-xl font-semibold text-gray-700 max-w-lg mx-auto">
  {/* Modal content for updating the card */}
  <h2 className="text-2xl font-bold text-center mb-4">Edit Card</h2>
  
  <div className="grid gap-4">
    <p className="flex justify-between items-center">
      <span>Tag:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.tag} 
        onChange={e => setEditingCard({ ...editingCard, tag: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Title:</span>
      <input 
        className="border border-gray-300 p-2 rounded w-full ml-2" 
        type="text" 
        value={editingCard.title} 
        onChange={e => setEditingCard({ ...editingCard, title: e.target.value })} 
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Location:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.location} 
        onChange={e => setEditingCard({ ...editingCard, location: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Description:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.description} 
        onChange={e => setEditingCard({ ...editingCard, description: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Total Price:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.total_price} 
        onChange={e => setEditingCard({ ...editingCard, total_price: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Get Price:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.get_price} 
        onChange={e => setEditingCard({ ...editingCard, get_price: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Security Type:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.security_type} 
        onChange={e => setEditingCard({ ...editingCard, security_type: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Investment Multiple:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.investment_multiple} 
        onChange={e => setEditingCard({ ...editingCard, investment_multiple: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Maturity:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.maturity} 
        onChange={e => setEditingCard({ ...editingCard, maturity: e.target.value })}
      />
    </p>
    <p className="flex justify-between items-center">
      <span>Min Investment:</span>
      <input 
        type="text" 
        className="border border-gray-300 p-2 rounded w-full ml-2"
        value={editingCard.min_investment} 
        onChange={e => setEditingCard({ ...editingCard, min_investment: e.target.value })}
      />
    </p>
  </div>

  {/* Action Buttons */}
  <div className="mt-6 flex justify-end space-x-4">
    <button 
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      onClick={handleSaveUpdate}
    >
      Save
    </button>
    <button 
      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      onClick={() => setEditingCard(null)}
    >
      Cancel
    </button>
  </div>
</div>

            )}

            <ToastContainer />
        </div>
    );
}

export default AllCard;
