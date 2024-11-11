import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">FoodiesHub.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <p>&copy; 2024 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshub@gmail.com</p>
                <p>+91 72978 04273</p>
                <p>ABC Street, XYZ City</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>
                    <FontAwesomeIcon className="icon" icon={faFacebook}/>
                </p>
                <p>
                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                </p>
                <p>
                    <FontAwesomeIcon className="icon" icon={faInstagram}/>
                </p>
            </div>
        </div>
    )
}