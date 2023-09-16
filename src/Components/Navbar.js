import logo from "../Images/images/logo.svg";
import { navData } from "../data";
import { navIcons } from "../data";

const navLinks = navData.map(({ href, classN, name,id }) => {
    return <li key={id}>
        <a href={href} className={classN}> {name}</a>
    </li>
})

const iconLinks = navIcons.map(({ href, target, rel, classN, classI,id }) => {
   
    return <li key={id}>
        <a href={href} target={target} rel={rel} className={classN}
        ><i className={classI}></i
        ></a>
    </li>
})
const Navbar =()=>{

    return <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <ul className="nav-links" id="nav-links">
                {navLinks}
            </ul>

            <ul className="nav-icons">
                {iconLinks}
            </ul>
        </div>
    </nav>
}

export default Navbar