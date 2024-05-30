import React, {useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Contact() {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <div>
            <div>
                {/* 
                            =============================================
                                Text Inner Banner One
                            ============================================== 
                            */}
                <div className="text-inner-banner-one pos-r">
                    <div className="shape-wrapper">
                    <svg className="img-shape shape-one">
                        <path fillRule="evenodd" fill="rgb(255, 223, 204)" d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z" />
                    </svg>
                    <svg className="img-shape shape-two">
                        <path fillRule="evenodd" fill="rgb(182, 255, 234)" d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z" />
                    </svg>
                    <svg className="img-shape shape-three">
                        <path fillRule="evenodd" fill="rgb(181, 198, 255)" d="M12.000,24.000 C18.627,24.000 24.000,18.627 24.000,12.000 C24.000,5.372 18.627,-0.000 12.000,-0.000 C5.372,-0.000 -0.000,5.372 -0.000,12.000 C-0.000,18.627 5.372,24.000 12.000,24.000 Z" />
                    </svg>
                    <svg className="img-shape shape-four">
                        <path fillRule="evenodd" fill="rgb(255, 156, 161)" d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.500 C15.000,3.358 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.358 -0.000,7.500 C-0.000,11.642 3.358,15.000 7.500,15.000 Z" />
                    </svg>
                    <svg className="img-shape shape-five">
                        <path fillRule="evenodd" fill="rgb(178, 236, 255)" d="M12.500,25.000 C19.403,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.403,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z" />
                    </svg>
                    </div> {/* /.shape-wrapper */}
                    <div className="container">
                    <p>Get In touch</p>
                    <h2 className="pt-30 pb-15">contact us </h2>
                    <p className="sub-heading">Envoyez nous votre demande</p>
                    </div>
                </div> {/* /.text-inner-banner-one */}
                {/*
                            =====================================================
                                Contact Address
                            =====================================================
                            */}
                <div className="contact-address-two">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-2">
                        <div className="address-block">
                            <div className="icon-box"><i className="far fa-phone-alt mt-1" style={{color: '#323892', fontSize: '60px', fontWeight: 'lighter'}} /></div>
                            <h5>TÉLÉPHONE</h5>
                            <p>09 83 71 29 00 <br />07 64 09 24 31</p>
                        </div> {/* /.address-block */}
                        </div> {/* /.col- */}
                        <div className="col-lg-2">
                        <div className="address-block">
                            <div className="icon-box"><img src="assets/images/icon/icon21.svg" alt="" /></div>
                            <h5>Email </h5>
                            <p><a href="#">rogan@coname.com</a> </p>
                        </div> {/* /.address-block */}
                        </div> {/* /.col- */}
                        <div className="col-lg-2">
                        <div className="address-block">
                            <div className="icon-box"><img src="assets/images/icon/icon20.svg" alt="" /></div>
                            <h5>Address</h5>
                            <p>18 rue de villeneuve <br />	CP 90180 <br />	94563 Rungis cedex</p>
                        </div> {/* /.address-block */}
                        </div> {/* /.col- */}
                        <div className="col-lg-2">
                        <div className="address-block">
                            <div className="icon-box"><i className="far fa-car mt-1" style={{color: '#323892', fontSize: '60px', fontWeight: 'lighter !important'}} /></div>
                            <h5>EN VOITURE</h5>
                            <p>A106, A86, A6, N7</p>
                        </div> {/* /.address-block */}
                        </div> {/* /.col- */}
                        <div className="col-lg-2">
                        <div className="address-block">
                            <div className="icon-box"><i className="far fa-bus mt-1" style={{color: '#7444ff', fontSize: '60px', fontWeight: 'lighter !important'}} /></div>
                            <h5>EN TRAIN/BUS</h5>
                            <p>RER C, Tramway T7 <br /> 5 lignes de bus,Navette Icade</p>
                            {/* <ul>
                                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul> */}
                        </div> {/* /.address-block */}
                        </div> {/* /.col- */}
                    </div> {/* /.row */}
                    </div> {/* /.container */}
                </div> {/* /.contact-address-two */}
                {/*
                            =====================================================
                                Contact Form
                            =====================================================
                            */}
                <div className="contact-us-section py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-last">
                        <div className="contact-form">
                            <form className="form theme-form-style-one" id="contact-form" action="https://heloshape.com/html/rogan/rogan-b/html/inc/contact.php" data-toggle="validator">
                            <div className="messages" />
                            <div className="controls">
                                <div className="form-group">
                                <input id="form_email" type="text" name="text" placeholder="Nom / Prénom" required="required" data-error="Valid Nom / Prénom is required." />
                                <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                <input id="form_email" type="email" name="email" placeholder="Email Address*" required="required" data-error="Valid email is required." />
                                <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                <input id="form_email" type="text" name="phone" placeholder="Téléphone" required="required" data-error="Valid Téléphone is required." />
                                <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                <input id="form_sub" type="text" name="sub" placeholder="Sujet de contact*" required="required" data-error="Sujet de contact is required." />
                                <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                <textarea id="form_message" name="message" className="form_message" placeholder="Your Message*" required="required" data-error="Please,leave us a message." defaultValue={""} />
                                <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                <input id="form_sub" type="text" name="sub" placeholder="Entrez le résultat de l'addition" required="required" data-error="Entrez le résultat de l'addition is required." />
                                <div className="help-block with-errors" />
                                </div>
                                <button className="theme-btn line-button-one button-orange radius3">Envoyer</button>
                            </div> {/* /.controls */}
                            </form>
                        </div> {/* /.contact-form */}
                        </div>
                        <div className="col-lg-6 order-lg-first"><div id="google-map-one" className="md-mt-80"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5262.03306167043!2d2.353074!3d48.743381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e676837183e9cf%3A0xbf22fc976108818!2s18%20Rue%20de%20Villeneuve%2C%2094150%20Rungis!5e0!3m2!1sen!2sfr!4v1631106751339!5m2!1sen!2sfr" width={500} height={620} style={{border: 0}} allowFullScreen loading="lazy" /></div></div>
                    </div> {/* /.row */}
                    </div> {/* /.container */}
                </div> {/* /.contact-us-section */}
                </div>

        </div>
    )
}

export default Contact
