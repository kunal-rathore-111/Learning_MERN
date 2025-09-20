
/* 
Assignment #1 - Create linkedin ProfileCard Component 
*/

import "./App.css"
import linkdinPng from "./assets/linkdin.png";
import githubPng from "./assets/github.png";
import emailPng from "./assets/email.png";
import profileImg from "./assets/profileImg.png";

export default function App() {
    return <div className="HeroDiv">
        <ProfileCard></ProfileCard>
    </div>
}
// suppose data from backend
const details = {
    job: "Frontend-developer", detail: "Coder-Gamer-Techie"
}


function ProfileCard() {

    return <div className="profileHero">
        <div className="UpDiv">

            <div className="profileImgDiv">
                <img src={profileImg} className="profileImg" />
            </div>

        </div>
        <div className="DownDiv">
            <div className="detailsDiv">
                <span className="jobSpan">{details.job}</span>
                <span className="detailsSpan">{details.detail}</span>
                <span className="imagesDiv">
                    <img src={linkdinPng} />
                    <img src={githubPng} />
                    <img src={emailPng} />
                </span>
                <a href="#" className="messageLink">Message</a>
            </div>
        </div>
    </div>
}