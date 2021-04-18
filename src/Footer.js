import React from "react";

const Footer = () =>(
    <div className="landing-extension">
        <footer className="footer mt-5">
            <div className="footer-clients">
                <h2 className="footer-clients-heading">Our Clients For Another Purpose</h2>
                <div className="clients-main"></div>
            </div>
            <hr></hr>
            <div className="footer-main">
                <div className="container">
                    <ul className="footer-list row">
                        <li className="footer-list-item odd col-md-2 col-sm-6"><a href="/">About Us</a></li>
                        <li className="footer-list-item even col-md-2 col-sm-6"><a href="/">Services</a></li>
                        <li className="footer-list-item odd col-md-2 col-sm-6"><a href="/">Get in Touch</a></li>
                        <li className="footer-list-item even col-md-2 col-sm-6"><a href="/">Our Partners</a></li>
                        <li className="footer-list-item odd col-md-2 col-sm-6"><a href="/">Terms of Use</a></li>
                        <li className="footer-list-item even col-md-2 col-sm-6"><a href="/">Privacy Policy</a></li>
                    </ul>
                    <div className="footer-email">
                        <a href="mailto:hello@learnovate.xyz">hello@learnovate.xyz</a>
                    </div>
                    <div className="footer-social-icons">
                        <ul className="footer-social-icons-list row">
                            <a href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="https://www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="https://www.youtobe.com"><ion-icon name="logo-youtube"></ion-icon></a>
                        </ul>
                    </div>
                </div>
                <div className="footer-rights-text">
                    Copyright 2020 Learnovate - <span className="inner">All Rights Reserved</span>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;