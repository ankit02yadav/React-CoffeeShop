import React, { useRef, useEffect } from 'react';
import './About.css'
import VedioCofee from '../assets/coffee.mp4'

function About() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.error("Autoplay failed:", error);
            });
        }
    }, []);
    return (
        <section id='about' className='about'>
            <div className="container-about">
                <div className="vedio">
                    {/*   ref={videoRef} autoplay={true} */}
                    <video  src={VedioCofee} controls muted={true} loop={true} ></video>
                </div>
                <div className="content">
                    <h2>We Telecast our
                        Coffee Making And Milk Extraction Live</h2>
                    <span>We are here to listen from you deliver exellence</span>
                    <div className="summery">
                    At Our Coffee Shop, we take pride in crafting the perfect brew using our signature founder’s milk. From carefully selecting the finest beans to blending them with our specially crafted milk, every step is executed with passion. Our mission is to provide you with an extraordinary coffee experience, where each cup is brewed to perfection and enriched with the smoothest, freshest milk.
                    </div>
                    <details>
                        <summary>Her Own <span>New Flavoured</span> Milk</summary>
                        <p>The flavored milk is a delightful blend of rich, creamy taste and essential nutrients, offering a healthy yet indulgent experience. Packed with vitamins, protein, and natural flavors, each sip provides a nourishing treat. Perfect for coffee lovers or anyone seeking a flavorful, nutrient-rich drink to enjoy anytime.</p>
                    </details>
                </div>
            </div>
        </section>
    );
}
export default About