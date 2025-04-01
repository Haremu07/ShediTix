import "./Verify.css"
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";


const Verify = () => {
  const navigate = useNavigate()
  return (
    <div className="email-verification-container">
      <div className="Nav">
        <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
      <div className="email-verification-body">
        <div className="email-verification-form2">
        <span className="Back" onClick={() => navigate("/forget-password")}><FaArrowLeft/><p>go back</p></span>
          <div className="email-verification-form-Header">
          <h2 style={{color: "#5a4e9c"}}>ShediTix</h2>
          <h2>Welcome to ShediTix!</h2>
          </div>
          <form className="form">
            <p className="Passage2">Congratulations Cynthia Chidera!
               You’re officially part of the SchediTix family! 
               🙌 We’re so excited to help you create, manage, and promote amazing events.</p> 

           <p className="Passage2">Before you dive in, we just need you to <span className="resend">verify
             your email</span>  to activate your account. It’s super
              quick, just click the button below and you’re 
              good to go! 🥰</p>

           <div className="CodeBox">
           <p> <span className="resend" onClick={() => navigate("/login")}>Skip</span>  </p>
           </div>
          </form>
        </div>
      </div>
      <div className="Nav2">
      <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  )
}

export default Verify
