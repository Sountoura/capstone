import '../styles/Nav.css';
import logo from '../assets/logo.svg'
const Nav = () => {

    return (
        <div>

            <nav>
                <ul>
                    <li><img src={logo} width={200} height={50} /></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#orderonline">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;