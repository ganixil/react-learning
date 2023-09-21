function Footer() {
    return (
        <footer>
            <img src={require('./images/icon.jpg')} alt='icon'/>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <p>1234 Fake Avenue, <br/>
                    New York, NY
                </p>
                <p>
                    (123)-456-7890
                </p>
                <p>
                    info@littlelemon.com
                </p>
            </div>
            <div>
                <h3>Connect</h3>
                <ul>
                    <li><a href='www.facebooke.com'>Facebook</a></li>
                    <li><a href='www.instagram.com'>Instagram</a></li>
                    <li><a href='www.tiktok.com'>Tiktok</a></li>
                </ul>
                <p>Join Us</p>
            </div>
        </footer>
    );
}
  
export default Footer;