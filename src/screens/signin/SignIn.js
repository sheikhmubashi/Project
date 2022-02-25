import './signIn.css'
import computerImage from '../../images/computer_image.png'
import arrow from '../../images/arrow.png'
import printer from '../../images/printer.png'
import dotImage from '../../images/dotImage.png'
import { Link } from "react-router-dom"

function SignIn() {
  return (
    <div className="mainDiv">
      <div className="redPageDiv">
        <h3>CUSTOM <span>POINT</span> AND <span>CLICK</span> LINEUP CARDS THAT YOU CAN <span>PRINT</span> FROM YOUR <span>COMPUTER</span></h3>
        {/* <div className='imagesDiv'>
          <div className='com_Img'>
            <img src={computerImage} alt="computer image" />
          </div>
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className='printerDivMain'>
          <div className='printerDiv'>
            <img src={printer} alt="computer image" />
          </div>
        </div>
        <div className='dotDiv'>
          <img src={dotImage} alt="dot image" />
        </div> */}
      </div>
      <div className="signUpPage">
        <div className='signUpMain'>
          <h1>Sign In</h1>
          <p>Need a custom lineup card programs? <Link to='/signup'>Sign-up/</Link><Link to='/signin'>Sign-in now.</Link>
            We are ready to serve you.</p>
          <form>
            <label>Email Address</label>
            <input type='email' />
            <label>Password</label>
            <input type='password' />
            <label className='forgot'>Forgot Password?</label>
            <button>SIGN IN</button>
          </form>
          <p>Already have an account <Link to='/signup'>Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;