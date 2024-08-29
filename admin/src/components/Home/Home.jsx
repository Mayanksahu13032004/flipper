import React, { useState } from 'react';
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const [user, setUser] = useState({
    tag: '',
    title: '',
    location: '',
    description: '',
    total_price: '',
    get_price: '',
    security_type: '',
    investment_multiple: '',
    maturity: '',
    min_investment: '',
  });

  const [Image, setImage] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    try {
      // Upload image and get the URL
      const formdata = new FormData();
      formdata.append("Image", Image);
      const res = await axios.post('https://printovert-backend.onrender.com/api/v1/users/cloudinary/v2/upload/outService', formdata);
      console.log(res.data);
      const imageUrl = await res.data.URL; // assuming the response contains the image URL directly

      // Create the payload object with user data and image URL
      const payload = {
        ...user,
        card_image: imageUrl,
      };

      // Send the payload as JSON
      const response = await fetch('https://fliper-invest-backend.onrender.com/api/v1/project/card/create-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.status === 201) {
        setMessage(responseData.message);
        console.log('Card created successfully');
        resetForm();
      } else {
        setMessage(responseData.message || 'Card not created');
      }
    } catch (error) {
      console.error('Error creating card:', error);
      setMessage('An error occurred while creating the card');
    } finally {
      setLoading(false); // Set loading to false after submission is complete
    }
  };

  const resetForm = () => {
    setUser({
      tag: '',
      title: '',
      location: '',
      description: '',
      total_price: '',
      get_price: '',
      security_type: '',
      investment_multiple: '',
      maturity: '',
      min_investment: '',
    });
    setImage(null);
    document.getElementById('card-image').value = ''; // Reset file input
  };

  return (
    <div className="text-center bg-gray-100 py-10">
      <h1 className="text-4xl mb-6 font-extrabold text-gray-800">Next Investment Card</h1>
      <div className="mx-auto w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          {Object.keys(user).map((key) => (
            <div key={key} className="mb-5">
              <label htmlFor={key} className="block text-left text-xl font-semibold text-gray-700 mb-2 capitalize">
                {key.replace(/_/g, ' ')}
              </label>
              <input
                type={key.includes('price') || key.includes('investment') || key.includes('multiple') ? 'number' : 'text'}
                placeholder={key.replace(/_/g, ' ')}
                name={key}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                onChange={handleInput}
                value={user[key]}
                required
              />
            </div>
          ))}

          <div className="mb-5">
            <label htmlFor="card_image" className="block text-left text-xl font-semibold text-gray-700 mb-2">
              Card Image
            </label>
            <input
              id="card-image"
              type="file"
              name="card_image"
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onChange={handleImageUpload}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-2xl font-bold rounded-lg transition duration-200 ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
            disabled={loading} // Disable button when loading is true
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {message && <p className="text-2xl mt-6 text-green-600">{message}</p>}
      </div>
    </div>
  );
}
