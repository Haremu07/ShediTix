import "./ResetSuccessfull.css"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

const PasswordResetSuccessfull = () => {
  const navigate = useNavigate()
  return (
    <div className="passwordsuccessful-container">
      <div className="Nav">
        <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
      <div className="passwordsuccessful-body">
        <div className="passwordsuccessful-form">
            <span className="Back" onClick={() => navigate("/forget-password")}><FaArrowLeft/><p>go back</p></span>
          <div className="form-Header">
          <h2 style={{color: "#5a4e9c"}}>SchediTix</h2>
          <h2 >Congratulations!!!</h2>
          </div>
          <form className="form">
            <p className="Passage">Your password has been successfully reset.
               You're all set to continue managing your
                events and ticket sales on SchediTix.
                 Welcome back!</p>
            <button type="submit" className="btn">Get Started</button>
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

export default PasswordResetSuccessfull