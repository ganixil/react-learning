function Nav() {
    return (
        <nav>
            <img src={require('./images/logo.png')} alt='logo'/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}
  
export default Nav;