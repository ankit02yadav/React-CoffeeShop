import './home.css'
import Logo from '../assets/logo.png'

function Home(){
    return(
        <section className='home' id='home'>
            <nav className='navbar'>
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                    <div className="logo-name">Sunny's Coffee Shop</div>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#flavour">Flavour</a></li>
                    <li><a href="#buy">Buy</a></li>
                    <li><a href="#footer">Contact Me</a></li>
                </ul>
            </nav>
            <div className="container-home">
                <h2>Now you can feel the Energy</h2>
                <h1>Start your day with
                Fresh Milk Coffee</h1>
                <button href="#buy">Buy Now</button>
            </div>
        </section>
    );
}

export default Home