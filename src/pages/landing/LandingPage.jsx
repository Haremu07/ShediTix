import { useEffect, useState } from "react"
import "./LandingPage.css"
import { TbTargetArrow } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { GrServerCluster } from "react-icons/gr";
import { FaListAlt } from "react-icons/fa";
import Cards from "./Cards";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlides, setCurrentSlides] = useState(0)
  const [fade, setFade] = useState(false)

  const slides = [
    {
      Image: "https://www.brides.com/thmb/ija6ik1y_1T1AnwH8AU5FXOPOh0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/must-take-wedding-photos-accessory-details-erich-mcvey-0723-37f2718300b94a8d802a5c3bc456e739.jpg"
  },
    {
      Image: "https://www.bellanaijaweddings.com/wp-content/uploads/2023/07/Beauty-Victory-Prewedding-Shoot-BellaNaija-Weddings09-scaled.jpg"
  },
    {
      Image: "https://www.bellanaijaweddings.com/wp-content/uploads/2023/07/Beauty-Victory-Prewedding-Shoot-BellaNaija-Weddings08-scaled.jpg"
  },
];

const slides2 = [
  {
    text: "Everything You Need to Create, manage, and attend Events."
  },
  {
    text: "ShediTix go helep you sama beta party for people to flenjoor!!."
  },
];

useEffect(() => {
  const interval = setInterval(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 3000)
  }, 3000)
  return () => clearInterval(interval);
}, [slides.length])


useEffect(() => {
  const interval = setInterval(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlides((prev) => (prev + 1) % slides2.length);
      setFade(false);
    }, 3000)
  }, 3000)
  return () => clearInterval(interval);
}, [slides2.length])
  return (
    <div className="LandingPage-body">
      <div className={`LandingPageImgBox ${fade ? "fade" : ""}`}
      style={{ backgroundImage: `url(${slides[currentSlide].Image})`}}
      >
        <img className="Img" src={slides[currentSlide].Image} />
        <div className="LandinPageImgBoxText">
          <h1 className="LandinPageImgBoxTextH1">Transform Your Events Into Unforgettable Experience</h1>
          <p className="LandinPageImgBoxTextP">SchediTix simplifies ticketing and event management in one powerful tool</p>
          <button className="Btn">Get started for free</button>
        </div>
      </div>
      <div className="LandingPageBox2">
        <div className="LandingPageBox2Nav1">
          <div className="LandingPageBox2Nav1Small">
            <p>Why choose ShediTix?</p>
            <h1 className="LandingPageBox2Nav1SmallH1" >{slides2[currentSlides].text}</h1>
            <p>SchediTix brings event planning and ticketing to your 
              fingertips. Whether you're an event organizer or an 
              attendee, our platform offers a seamless experience.
               From easy event creation to simple ticket purchases and 
               real-time updates, we've got you covered.</p>
               <div className="LandingPageBox2Nav1SmallBox">
                <button className="Btns">Create an event</button>
                <button className="Btns2">Attend an event</button>
               </div>
          </div>
        </div>

        <div className="LandingPageBox2Nav1">
        <div className="LandingPageBox2Nav1Small2">
          <div className="card">
            <div className="cardNav"><TbTargetArrow size={70}/></div>
            <div className="cardNav">
              <p>Effortless Event Creation for Organizers</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><BsTicketPerforatedFill size={80}/></div>
            <div className="cardNav">
              <p>Admin Dashboard for Seamless Event Management</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><GrServerCluster size={60}/></div>
            <div className="cardNav">
              <p> Simple Ticketing System with Purchase Confirmation</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><FaListAlt size={70}/></div>
            <div className="cardNav">
              <p>Streamlined Event Listings for Attendees</p>
            </div>
          </div>
        </div>
        </div>
      </div>


      <div className="TrendingEventBlock">
          <div className="TrendingEventBlockHeader">
            <h1>Trending Events</h1>
          </div>
          <div className="TrendingEventBlockScroll">
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st December, 2025" content="This is the 4th edition of the biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="2,000"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle love feast" Date="23rd December, 2025" content="This is the 4th edition of the biggest community love feast." Location="Ayobami Hall" Price="Free"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle City Youth Marathon" Date="18th Novenber, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Eko Hotel and Suites" Price="5,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st September, 2025" content="This is the 4th edition of te biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="20,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st December, 2025" content="This is the 4th edition of the biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="2,000"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle love feast" Date="23rd December, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Ayobami Hall" Price="Free"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle City Youth Marathon" Date="18th Novenber, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Eko Hotel and Suites" Price="5,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st September, 2025" content="This is the 4th edition of te biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="20,000"/>
     
          </div>
        </div>
    </div>
  )
}

export default LandingPage