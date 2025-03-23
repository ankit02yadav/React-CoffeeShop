import './footer.css'

function Footer(){
    return(
        <footer className='footer' id='footer'>
            <div className="about-us-footer">
                <h2>About Us</h2>
                <div className='sunny'>
                At Sunny's Coffee Shop, we create unique coffee blends using the founder’s breast milk for a nourishing, unforgettable experience.
                </div>
                <div className="copy">
                Copyright &copy;2025 All rights reserved | This website is made with  by <a href="https://ankit-yadav2.github.io/portfolio/">Ankit Yadav</a>
                </div>
            </div>
            <div className="news-footer">
                <h2>News Letter</h2>
                <p>Stay update with our latest</p>
                <input placeholder='Enter Email' type="email" name="" id="" />
                <button type='submit' >&#8594;</button>
            </div>
            <div className="contact-footer">
                <h2>Follow Us</h2>
                <p>Let's make me viral</p>
                <div className="no">8448******</div>
            </div>
        </footer>
    );
}

export default Footer