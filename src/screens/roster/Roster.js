import rosterLogo from '../../images/rosterlogo.png'
import profilePic from '../../images/profilepic.png'

import './roster.css'
const Roster = () => {
    return (
        <div className='rosterParentDIv'>
            <div className='navbar'>
                <div className='rosterLogo'>
                    <img src={rosterLogo} alt="logo" />
                </div>
                <div className='profileData'>
                    <p>Mark Thomson</p>
                    <img src={profilePic} alt="Profile Picv" />
                </div>
            </div>
        </div>
    )
}

export default Roster;