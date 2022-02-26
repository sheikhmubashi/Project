import rosterLogo from '../../images/rosterlogo.png'
import profilePic from '../../images/profilepic.png'
import rosterImg from '../../images/roster.png'

import { Link } from 'react-router-dom'
import './roster.css'
const Roster = () => {
    return (
        <div className='rosterParentDIv'>
            <div className='navbar'>
                <div className='div80'>
                    <div className='rosterLogo'>
                        <img src={rosterLogo} alt="logo" />
                    </div>
                    <div className='profileData'>
                        <p>Mark Thomson</p>
                        <img src={profilePic} alt="Profile Picv" />
                    </div>
                </div>
            </div>
            <div className='varticleDiv'>
                <div className='divLinks'>
                    <div>
                    <img src={rosterImg} alt="roster image"/>
                    <Link to="#">Roster</Link>
                    </div>
                    <div>
                    <Link to="#">Dugout Lineup</Link>
                    </div>
                    <div>
                    <Link to="#">Umpires Lineup</Link>
                    </div>
                    <div>
                    <Link to="#">Blank Dugout Lineup</Link>
                    </div>
                    <div>
                    <Link to="#">Blank Umpires Lineup</Link>
                    </div>
                    <div>
                    <Link to="#">BP Schedule</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roster;