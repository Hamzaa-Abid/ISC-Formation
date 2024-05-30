import React from 'react'
import { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
          <div>
            {/*
                =====================================================
                  Footer
                =====================================================
                */}
            <footer className="theme-footer-one color-orange pt-130">
              <div className="top-footer">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12 footer-about-widget">
                      <a href="index.html" className="logo"><img src="images/logo-isc-formation.png" alt="" /></a>
                      <a href="#" className="email"><i className="fa fa-map-marker mr-2" />ISC FORMATION 18 Rue de Villeneuve CP <br /> 90180 94563 Rungis cedex
                        <br /> N° agrément 94 16_002</a>
                      <a href className="email"><i className="fa fa-envelope mr-2" />contact@iscformation.fr</a>
                      <a href="#" className="phone"><i className="fa fa-phone-alt mr-2" />09 83 71 29 00 </a>
                    </div> {/* /.about-widget */}
                    <div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list">
                      <h5 className="footer-title">Navigation</h5>
                      <ul>
                        <li><a href="project-detail.html ">Accueil</a></li>
                        <li><a href="project-detail.html ">Formations</a></li>
                        <li><a href="project-detail.html ">Financement</a></li>
                        <li><a href="project-detail.html ">EXAMEN</a></li>
                        <li><a href="project-detail.html ">E-LEARNING</a></li>
                        <li><a href="project-detail.html ">Contact</a></li>
                      </ul>
                    </div> {/* /.footer-recent-post */}
                    <div className="col-lg-3 col-sm-6 col-12 footer-list">
                      <h4 className="footer-title">Nous Suivre</h4>
                      <p className="mb-5">Être informé de nos meilleurs offres:</p>
                      <div className="newsletter-wrapper">
                        {/* Begin Mailchimp Signup Form */}
                        <div id="mc_embed_signup2">
                          <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate dark-fields" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll2">
                              <div className="mc-field-group input-group form-label-group">
                                <input type="email"  name="EMAIL" className="required email form-control" placeholder="Email Address" id="mce-EMAIL2" />
                                {/* <label for="mce-EMAIL2">Email Address</label> */}
                                <button type="submit" name="subscribe" id="mc-embedded-subscribe2" className="btn send-btn"><i className="fas fa-location-arrow" /></button>
                              </div>
                              <div id="mce-responses2" className="clear">
                                <div className="response" id="mce-error-response2" style={{display: 'none'}} />
                                <div className="response" id="mce-success-response2" style={{display: 'none'}} />
                              </div> {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                              <div style={{position: 'absolute', left: '-5000px'}} ><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} /></div>
                              <div className="clear" />
                            </div>
                          </form>
                        </div>
                        {/*End mc_embed_signup*/}
                      </div>
                    </div> {/* /.footer-list */}
                    <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
                      <h5 className="footer-title">Social Meadia Links</h5>
                      <p />
                      <ul>
                        <li><a href="https://www.facebook.com/iscformation94" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="https://twitter.com/ContactIsc" target="_blank"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        <li><a href="https://plus.google.com/u/0/116154209588503334134" target="_blank"><i className="fab fa-google-plus-g" aria-hidden="true" /></a></li>
                        <li><a href="https://www.instagram.com/iscformation94/" target="_blank"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                   
                      </ul>
                    </div>
                  </div> {/* /.row */}
                </div> {/* /.container */}
              </div> {/* /.top-footer */}
              <div className="container">
                <div className="bottom-footer-content">
                  <p>© 2019 copyright all right reserved</p>
                </div> {/* /.bottom-footer */}
              </div>
            </footer> {/* /.theme-footer-one */}
            {/* Scroll Top Button */}
            <button className="scroll-top tran3s">
              <i className="fa fa-angle-up" aria-hidden="true" />
            </button>
          </div>


        </Fragment>
    )
}

export default Footer
