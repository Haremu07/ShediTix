import "./ResetSuccessfull.css"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

const PasswordResetSuccessfull = () => {
  const navigate = useNavigate()
  return (
    <div className="passwordsuccessful-container">
      <div className="Nav">
      <div className="signIn-Nav-Header">
          <div className="LogoBox">
          <img  className="Logo" src="../../../../public/images/orangelogo.png" alt="" onClick={() => navigate("/")} />
          </div>
          <div className="signIn-Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
        </div>
      </div>
      <div className="passwordsuccessful-body">
        <div className="passwordsuccessful-form">
          <div className="form-Header">
            <span className="Back" onClick={() => navigate("/reset-password")}><FaArrowLeft/><p>go back</p></span>
          <h2 >Congratulations!!!</h2>
          </div>
          <form className="form">
            <p className="Passage">Your password has been successfully reset.
               You're all set to continue managing your
                events and ticket sales on SchediTix.
                 Welcome back!</p>
                 <div className="CelebrateBox">
                 <img className="CelebrateImg" src="../../../public/images/celebrate-pVcLfSIZyx.png" alt="" />
                 </div>
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