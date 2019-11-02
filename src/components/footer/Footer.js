import React from 'react'
import './Footer.scss'

export default () => {
    return(
        <>
            <div className={'footername'}>
                <div className={'spread'}>
                    <h2>Spread The Love</h2>
                    <div className="socialicons">
                        <ul>
                            <li>
                                <a href="">
                                    <i className="fa fa-facebook-f"></i>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-twitter"></i>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-pinterest-p"></i>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-instagram"></i>
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={'career'}>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Coupons & Deals</a>
                            </li>
                            <li>
                                <a href="">Cancellation & Refund</a>
                            </li>
                            <li>
                                <a href="">Career</a>
                            </li>
                            <li>
                                <a href="">Reviews</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Sitemap</a>
                            </li>
                        </ul>

                    </div>
                    <div className="partner">
                        <p>Our Partner: <span>Bakingo.com</span> </p>
                    </div>
                </div>
            </div>
            <div className={'footercol'}>
                <div className={'underthefooter'}>
                    <div className={'copyright'}>
                        <p>Copyright 2019 FlowerAura. All Rights Reserved</p>
                    </div>
                    <div className={'privacy'}>
                        <ul>
                            <li className={'disclaim'}>
                                <a href="">Terms & Conditions</a>
                            </li>
                            <li className={'disclaim'}>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}