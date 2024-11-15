import {Link, useLocation} from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const [show, setShow] = useState(false)
    const location = useLocation(); 
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
    function closeSidebar() {
        setShow(false);
    }
    return (
        <>
            <div className="navbar container">
            <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
            <div className="nav-links">
                {
                    links.map(link => (
                        <Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
                    ))
                }
                {/* <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a> */}
            </div>
            <div onClick={() => setShow(true)} className={show ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            </div>
            {show && <Sidebar close={closeSidebar} links = {links}/>} 
        </>
    )
}