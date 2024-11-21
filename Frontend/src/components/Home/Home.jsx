import { useEffect,useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import svg1 from './assest/Next Invest - Landing Page (images)/1.svg'
import svg2 from  './assest/Next Invest - Landing Page (images)/2.svg'
import svg3 from  './assest/Next Invest - Landing Page (images)/3.svg'
import svg4 from  './assest/Next Invest - Landing Page (images)/4.svg'
import svg5 from  './assest/Next Invest - Landing Page (images)/5.svg'
import svg6 from  './assest/Next Invest - Landing Page (images)/6.svg'
import svg7 from  './assest/Next Invest - Landing Page (images)/7.svg'
import svg8 from  './assest/Next Invest - Landing Page (images)/8.svg'
import svg9 from  './assest/Next Invest - Landing Page (images)/9.svg'
import svg10 from './assest/Next Invest - Landing Page (images)/10.svg'
import svg11 from './assest/Next Invest - Landing Page (images)/11.svg'
import svg12 from './assest/Next Invest - Landing Page (images)/12.svg'
import svg13 from './assest/Next Invest - Landing Page (images)/13.svg'
import svg14 from './assest/Next Invest - Landing Page (images)/14.svg'
import svg15 from './assest/Next Invest - Landing Page (images)/15.svg'
import svg16 from './assest/Next Invest - Landing Page (images)/16.svg'
import logo1 from './assest/Next Invest - Landing Page (Icons)/001-facebook.svg'
import logo2 from './assest/Next Invest - Landing Page (Icons)/003-twitter.svg'
import logo3 from './assest/Next Invest - Landing Page (Icons)/004-instagram.svg'
import logo4 from './assest/Next Invest - Landing Page (Icons)/CaretDown.svg'
import Shape from './assest/Next Invest - Landing Page (images)/Shape.svg'
import progress from './assest/Next Invest - Landing Page (images)/Subtract.svg'
import { Navigate, useNavigate } from "react-router-dom";


function Home() {
const navigate=useNavigate();
  const [cards,setcards ]=useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  
  useEffect(()=>{
    setLoading(true); 
    axios.get('https://fliper-invest-backend.onrender.com/api/v1/project/card/get-card')
    .then(cards=>{ setcards(cards.data)
      setLoading(false);
    })
    
    .catch(err=>{console.log(err)
      setLoading(false);
    })
 },[])

 
 const [user, setUser] = useState({
 
  email:"",

 });

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUser({ ...user, [name]: value });
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);

  try {
    const response = await fetch('http://localhost:5000/api/v1/project/subscribe/subscribe-user', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(user)
    });

    const responseData = await response.json();
    console.log("The response of subscribe is",responseData);
    
    if (response.status === 201) {
      toast.success('User Subscribe successfully!');
      console.log("User Subscribe successfully");
    }
     else if(error.code===11000) {
      toast.success('User already subscribe with this email! OR Invalid Email');
    }else{
      toast.error('Invalid Email!');
    }
  } catch (error) {
    console.log("error",error);
    
    toast.error('Invalid Email!');
  }
}
function reset(){
  let inp=document.getElementById("rest");
  inp.value="";
}


const data=[
  {name:"Facebook",value:2000000000},
  {name:"Instagram",value:1500000000},
  {name:"Twitter",value:10000000000},
  {name:"Telegram",value:500000000},
]

const goToDetailPage=(card)=>{
  navigate('/craddetailpage',{state:{card}});
};


return (
    <>
  <div id='1stpage'>
  <img src={svg3} alt="" className=' w-[100%]'  />
    <img src={svg5} alt="" className=' h-[65vh] absolute left-20 top-10 '/>
    <p className='text-5xl text-white absolute left-40 top-32'>Meaningful investments in <br /> Main Street businesses</p>
    <p className='absolute left-44 top-64 text-white'>Browse vetted investment offering in <br /> communities all over the Us.</p>
    <button className='h-10 w-40 mt-4 absolute left-48 top-80 text-white bg-green-600'>get stated</button>
  </div>

   
  <div id="2ndpage"  className="w-full flex flex-wrap justify-center bg-gray-100 py-10">
  <div className="w-full text-center mb-8">
    <p className="text-3xl font-bold text-gray-800">Offerings Open for Investment</p>
    <p className="font-medium text-gray-600">
      Explore pre-vetted investment opportunities available in a growing number of industry categories.
    </p>
  </div>

  {loading ? (
    <div  className="w-full text-center mt-10">
      <p className="font-medium text-2xl text-gray-700">Loading cards, please wait...</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {cards.map((card) => {
        const totalRaised = card.get_price;
        const totalGoal = card.total_price;
        const percentageRaised = (totalRaised / totalGoal) * 100;

        return (
          <div
          onClick={()=>goToDetailPage(card)}
            key={card.id}
            className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 flex flex-col h-full"
          >
            <img
              src={card.card_image}
              alt={card.title}
              className="w-full h-[150px] object-cover rounded mb-4"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg text-gray-900">{card.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{card.location}</p>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            </div>
            <div className="mt-4">
              <progress
                value={percentageRaised}
                max="100"
                className="w-full h-2 rounded bg-gray-200"
              ></progress>
              <p className="text-sm mt-2 text-gray-700">
                <span className="text-green-600 font-bold">${card.get_price}</span> raised of $
                {card.total_price}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
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
            <button  className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-medium">
              VIEW
            </button>
          </div>
        );
      })}
    </div>
  )}
</div>



<div id='3rdpage' className='w-[100%] h-[80vh] bg-slate-200 mt-16'>
  <img src={svg14} alt="" className='h-[8vh] relative top-0 left-[90%]'/> 
   

 <img src={svg16} alt="" className='h-[40vh] relative top-20 left-[50%]'/>
   <img src={svg1} alt="" className='h-[55vh] relative bottom-[150px]' />
   <div className=' relative bottom-[520px] left-60'>
    <img src={progress} alt="" className="h-9" />
   <p className='font-bold text-4xl'>$7M+ paid out to <br /> investors</p>
   <p className='font-bold text-md text-gray-400 mt-10'>next invest is allready paid out over 7M in cash <br /> return to investors. Earn potential cash payments <br /> through unique revenue-share and debt financing <br /> investments</p>
   </div>
  </div>

<div id='4thpage' className='w-[100%] h-[100vh]  mt-40'>
  <div className='relative top-40 left-36'>
  <p className='font-bold text-4xl'>looking to raise capital <br /> for your growing <br /> business?</p>
  <p className='text-gray-400 text-md mt-8'>Whatever expanding or opening a brand-new <br /> concept, we make it easy to raise money from <br /> thousands of local investors</p>
  <button className='h-10 w-40 mt-4  text-white bg-green-700'>APPLY ONLINE</button>
  </div>
<img src={svg2} alt="" className='h-[65vh] relative bottom-40 left-[600px] ' />
</div>



<div className="h-[60vh]  ">
      <h1 className="text-3xl text-center font-semibold">Next Investement Trends</h1>
      <div className="mt-10">
        <PieChart >
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>


<div id='5thpage' className='h-[60vh] bg-slate-300 flex justify-evenly'>
  <div className='flex flex-col '>
<div>
<p className="mb-8 font-semibold mt-12">NEXT INVEST</p>
<p className='mb-28'>Copyright @2020 Legalprum. all right reserved</p>
</div>
  <div>


<div className=" border-pink-600  border-4 p-5">
<p  className="font-semibold">Subscribe to our newsletter</p>
<form onSubmit={handleSubmit}>
  <input 
  id="rest"
  type="email"
  className=' w-[60%] ' 
  placeholder='Email address'
  autoComplete="off"
  name="email"
  onChange={handleInput}
  
  />

  <button  onClick={reset} className=' bg-pink-600 w-10  h-6 z-1 relative top-1 '>
  <img className="h-6 rotate-[270deg]" src={logo4 } alt="" />
  </button>
  </form>

  
</div>

</div>
  </div>

  <div className='h-[100%] flex flex-col mt-12'>
    <ul className='h-[40%] flex flex-col justify-evenly '>
      <li  className='font-bold'>service</li>
      <li>email marketing</li>
      <li>compaigns</li>
      <li>Branding</li>
      <li>office</li>
    </ul>
  </div>

  <div className='h-[100%] flex flex-col mt-12'>
  <ul className='h-[40%] flex flex-col justify-evenly '>
      <li className='font-bold'>About</li>
      <li>Our Story</li>
      <li>Benefits</li>
      <li>team</li>
      <li>careers</li>
    </ul>
  </div>

  <div className="flex    mt-72">
    <img className="h-5 ml-5" src={logo1 } alt="" />
    <img className="h-5 ml-5" src={logo2 } alt="" />
    <img className="h-5 ml-5" src={logo3 } alt="" />
 
  </div>
  <ToastContainer /> 
</div>

</>
  )
}

export default Home




