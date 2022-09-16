import './App.css';
import React, {useState, useEffect} from 'react';
import Travl from '../images/Travl.png'
import calendar_MyPlan from '../images/calendar_MyPlan.jpg'
import graph_MyPlan from '../images/graph_MyPlan.jpg'
import questions_sleep from '../images/questions_sleep.jpg'
import Add_MyPlan from '../images/Add_MyPlan.jpg'
import sport_MyPlan from '../images/sport_MyPlan.jpg'
import prod_MyPlan from '../images/prod_MyPlan.jpg'
import Sleep_MyPlan from '../images/Sleep_MyPlan.jpg'
import Slide from 'react-reveal/Slide';

import Hotel_mv from '../images/Hotel_mv.png'
import airbnb_mv from '../images/Airbnb_mv.png'
import inquiry_mv from '../images/inquiry_mv.png'
import Select_mv from '../images/Select_mv.png'
import dub_mv from '../images/dub_mv.png'













import './Style_cont.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardList from '../components/CardList';




function getWindowSize() {
  const {innerWidth} = window;
  console.log({innerWidth})
  return innerWidth;
}






function App() {
  //const navigate = useNavigate();
      const [count, setCount] = useState(0)
      console.log(count)
      
      
      return (
        
        
        
        
        <div>
          
          
        <div className="statusBar">

          <img className="row br-100 dib grow" style = {{height: 60, width: 60}}
            src={Travl}
            alt="avatar"
          />    
          <p1 className = "appName" style = {{fontFamily: 'Open Sans'}}>My Vacae Geneva</p1>

          <div className="tr login" >
            <p2 className = "language" style = {{fontFamily: 'Open Sans'}}>English (US)</p2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
              <button className = "login_button" style = {{color: 'white'}}>
                <p2 style = {{fontFamily: 'Open Sans'}}>log in</p2>
              </button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
            <button  className = "signup_button">
          
            <p2 style= {{color:'white', fontFamily: 'Open Sans'}}>Sign Up - It's Free!</p2>
            </button>
            </a>

          </div>




        </div>
        <div className="motto">
          <div style = {{width: getWindowSize()/1.1, marginRight:200}}>

            
          <h1 className = 'Open Sans' style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            FIND THE PERFECT PLACE TO STAY AT FOR YOUR HOLIDAYS 
          </h1>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>With MyVacae, you can find hotels, airbnbs and hostels that match your needs and wants. Booking has never been that simple thanks to MyVacae</p1>
          </div>

          <div style = {{marginTop: 100}}>
            <Carousel autoFocus = 'true' className = "w5 grow"showStatus = {false} autoPlay interval="3000" transitionTime="2000" showThumbs={false} infiniteLoop = {true} style = {{height: 600, width: 2, borderRadius: 40, marginBottom:10, marginRight:50}}>
          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={Hotel_mv}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={airbnb_mv}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={inquiry_mv}
            alt="avatar"
          /> 
          </div>

</Carousel>

          </div>





        </div>
        

        <div className = "Andr_ios" style = {{marginLeft: getWindowSize()/4.5}}>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
              
            <h3 style = {{cursor: 'pointer', fontFamily: 'Open Sans'}}>{"Iphone >"}</h3>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">

            <h3 style = {{cursor: 'pointer', fontFamily: 'Open Sans'}}>{"Android >"}</h3>
            </a>

          </div>

          <Slide right duration={3000}>



          <div className="motto" style = {{marginLeft:100}}>
          

          <div style = {{marginRight:200, marginTop: 100}}>
            <Carousel className = "w5 grow" axis='vertical' showStatus = {false} autoPlay interval="3000" transitionTime="2000" showThumbs={false} infiniteLoop = {true} style = {{height: 600, width: 2, borderRadius: 40, marginBottom:10, marginRight:50}}>
            <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={Select_mv}
            alt="avatar"
          /> 
          </div>
          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={dub_mv}
            alt="avatar"
          /> 
          </div>

          

</Carousel>



          </div>

          <div style = {{width: getWindowSize()/1, marginRight:200}}>

            
          <h1 className = "MottoContainer" style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            MYVACE IS THE MOST MODERN SOCIAL MEDIA FOR BOOKING
          </h1>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>
            It has been designed to suit the needs of Genz Z. Simply scroll down until you find the perfect place. With MyVacae, booking can take as little as 5mn!
          </p1>
          </div>





        </div>
        </Slide>

        <Slide left duration={3000}>
        <div className="statusBar" style = {{flex:1, padding: 20, marginTop: 150, marginBottom:150}}>
          <div style = {{width: getWindowSize()/1.8, marginRight:200}}>
        <h1 className = "MottoContainer" style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            HOTELS AND AIRBNB OWNERS LOVE MYVACAE
          </h1>

          </div>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>
            Use MyVacae to book in less than 5mn
          </p1>

        </div>
        </Slide>
        <Slide bottom duration={3000}>
        <div className='tc' style = {{backgroundColor: "white"}}>
        <CardList/>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">

        <button style = {{marginBottom: 50}} className = "signup_button">

        <p2 style= {{color:'black', fontFamily: 'Open Sans'}}>Get Started!</p2>
        </button>
        </a>


        </div>
        </Slide>

        



        



        

        

        
        </div>
        

          
            




  


    );
}

export default App;
