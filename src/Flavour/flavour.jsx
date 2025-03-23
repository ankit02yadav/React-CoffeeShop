import React, { useState, useEffect, useRef } from 'react';
import './flavour.css';

function Flavour() {
    const [happyCount, setHappyCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [cupsCount, setCupsCount] = useState(0);
    const [babiesCount, setBabiesCount] = useState(0);

    const containerRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && happyCount === 0) {

                    const targets = {
                        happyCount: 2536,
                        totalCount: 7562,
                        cupsCount: 2013,
                        babiesCount: 45,
                    };

                    const duration = 3000;


                    const incrementRates = {
                        happyCount: targets.happyCount / (duration / 10),
                        totalCount: targets.totalCount / (duration / 10),
                        cupsCount: targets.cupsCount / (duration / 10),
                        babiesCount: targets.babiesCount / (duration / 10),
                    };

                    const incrementInterval = setInterval(() => {
                        setHappyCount(prevCount => {
                            if (prevCount < targets.happyCount) {
                                return Math.min(prevCount + incrementRates.happyCount, targets.happyCount);
                            } else {
                                return prevCount;
                            }
                        });

                        setTotalCount(prevCount => {
                            if (prevCount < targets.totalCount) {
                                return Math.min(prevCount + incrementRates.totalCount, targets.totalCount);
                            } else {
                                return prevCount;
                            }
                        });

                        setCupsCount(prevCount => {
                            if (prevCount < targets.cupsCount) {
                                return Math.min(prevCount + incrementRates.cupsCount, targets.cupsCount);
                            } else {
                                return prevCount;
                            }
                        });

                        setBabiesCount(prevCount => {
                            if (prevCount < targets.babiesCount) {
                                return Math.min(prevCount + incrementRates.babiesCount, targets.babiesCount);
                            } else {
                                return prevCount;
                            }
                        });
                    }, 10);


                    setTimeout(() => {
                        clearInterval(incrementInterval);
                    }, duration);
                }
            });
        }, { threshold: 0.5 });


        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Clean
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [happyCount, totalCount, cupsCount, babiesCount]);

    return (
        <section id='flavour' className='fav' ref={containerRef}>
            <div className="heading">
                <div className="head">What kind of Coffee we serve for you</div>
                <span>Who are in extremely love with founder's milk coffee</span>
            </div>
            <div className="container">
                <div className="favoul">
                    <div className="box">
                        <div className="headi">
                            <span>Milk Extraction</span>
                            <div className="price">&#8377;200</div>
                        </div>
                        <div className="info">
                            Experience the richness of our special milk extraction process, where founder carefully extract every drop of her milk to ensure a smooth and creamy texture that enhances your coffee experience.
                        </div>
                    </div>
                    <div className="box">
                        <div className="headi">
                            <span>Milk Show</span>
                            <div className="price">&#8377;250</div>
                        </div>
                        <div className="info">
                            Watch our unique milk preparation process, where we showcase the art of blending our founder’s milk with the finest coffee beans. A show that's as delightful as she show how she extract the milk in public/privatly.
                        </div>
                    </div>
                    <div className="box">
                        <div className="headi">
                            <span>Pure Milk</span>
                            <div className="price">&#8377;150</div>
                        </div>
                        <div className="info">
                            Indulge in the purest form of milk, extracted from the founder’s body, most natural ingredients. It’s creamy, smooth, and perfect for those who enjoy their milk on its own.
                        </div>
                    </div>
                    <div className="box">
                        <div className="headi">
                            <span>Milk Coffee</span>
                            <div className="price">&#8377;220</div>
                        </div>
                        <div className="info">
                            Savor the blend of our special founder’s milk with rich coffee. A perfect combination that promises a delicious and comforting experience in every cup.
                        </div>
                    </div>
                </div>

                <div className="costumer-row">
                    <div className="happy">{Math.round(happyCount)}<span>Happy Clients</span></div>
                    <div className="total">{Math.round(totalCount)}<span>Total Projects</span></div>
                    <div className="cups">{Math.round(cupsCount)}<span>Cups Coffee</span></div>
                    <div className="babies">{Math.round(babiesCount)} <span>Total Babies</span> </div>
                </div>
            </div>
        </section>
    );
}

export default Flavour;
