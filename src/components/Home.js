import React, {useEffect } from 'react';
import { Fragment } from 'react'

function Home() {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <Fragment>
            <div>
                {/* s
                            =============================================
                                Theme Main Banner One
                            ============================================== 
                            */}
                <div className="rogan-hero-section rogan-hero-four pt-300 pb-250 md-pt-200 md-pb-130 pos-r mt-5">
                    <div className="shape-wrapper">
                    <img src="assets/images/shape/50.svg" alt="" className="img-shape bg-shape" />
                    <svg className="img-shape shape-two">
                        <path fillRule="evenodd" fill="rgb(255, 223, 204)" d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z" />
                    </svg>
                    <svg className="img-shape shape-three">
                        <path fillRule="evenodd" fill="rgb(198, 255, 224)" d="M12.500,24.999 C19.403,24.999 25.000,19.403 25.000,12.500 C25.000,5.596 19.403,-0.001 12.500,-0.001 C5.596,-0.001 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,24.999 12.500,24.999 Z" />
                    </svg>
                    <svg className="img-shape shape-four">
                        <path fillRule="evenodd" opacity="0.451" fill="rgb(255, 126, 190)" d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z" />
                    </svg>
                    <svg className="img-shape shape-five">
                        <path fillRule="evenodd" fill="rgb(181, 198, 255)" d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z" />
                    </svg>
                    <svg className="img-shape shape-six">
                        <path fillRule="evenodd" fill="rgb(171, 247, 242)" d="M12.500,25.000 C19.404,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.404,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z" />
                    </svg>
                    </div>
                    <div className="container">
                    <div className="main-wrapper pos-r">
                        <h1 className="banner-main-title underline pt-15 pb-45 md-pt-10 md-pb-30 wow fadeInUp animated" data-wow-delay="0.4s">Vous rêviez de <br /> conduire
                        et <br /> d'être Elégant...</h1>
                        <p className="banner-sub-title pb-45 md-pb-30 wow fadeInUp animated" data-wow-delay="0.9s">80% Taux de réussite en T3P pour la session d'Avril 2021 <br />
                        90% Taux de réussite pour la Capacité de Marchandise <br /> Session Mai 2021</p>
                        {/* <a href="about-standard.html" class="theme-btn solid-button-one button-orange wow fadeInLeft animated" data-wow-delay="1.5s">Explore More</a>
                                        <a data-fancybox href="https://www.youtube.com/embed/vVXAXDvgPiQ" class="fancybox video-button button-orange video-button-one wow fadeInRight animated" data-wow-delay="1.5s">See live demo. <i class="flaticon-play-button"></i></a> */}
                    </div> {/* /.main-wrapper */}
                    </div> {/* /.container */}
                    <div className="shape-wrapper screen-wrapper">
                    <div className="screen-one img-shape wow fadeInRight animated" data-wow-delay="0.4s" data-wow-duration="2s">
                        <img src="assets/images/home/screen2.png" alt="" />
                        <img src="assets/images/home/shoot2.png" alt="" className="screen img-shape" />
                    </div>
                    <div className="screen-two img-shape wow fadeInLeft animated" data-wow-delay="0.4s" data-wow-duration="2s">
                        <img src="assets/images/home/screen3.png" alt="" />
                        <img src="assets/images/home/shoot1.png" alt="" className="screen img-shape" />
                    </div>
                    <div className="screen-three img-shape wow fadeInUp animated" data-wow-delay="0.6s" data-wow-duration="2s">
                        <img src="assets/images/home/screen4.png" alt="" />
                    </div>
                    <div className="screen-four img-shape wow zoomIn animated" data-wow-delay="0.89s" data-wow-duration="2s">
                        <img src="assets/images/home/icon.svg" alt="" />
                        <img src="assets/images/home/watch.svg" alt="" className="screen img-shape" />
                    </div>
                    </div>
                </div> {/* /.rogan-hero-section */}
                {/* headline sec */}
                <div className="section-full pb-5 ">
                    <div className="container ">
                    <div className="headline ">
                        <p className="text-center headline-text ">
                        La prochaine session d'examen aura lieu Mardi 29 juin 2021 Date. limite d'inscription :  Vendredi 28 mai 2021 inclus.
                        </p>
                    </div>
                    </div>
                </div>
                {/* 
                            =============================================
                                Our Core Feature
                            ============================================== 
                            */}
                {/* <div class="our-core-feature style-three pt-150 pb-30 md-pt-80 pos-r">
                                <div class="shape-wrapper">
                                    <img src="assets/images/shape/dot-shape.svg" alt="" class="shape-one img-shape">
                                    <svg class="img-shape shape-two">
                                        <path fill-rule="evenodd" fill="rgb(255, 234, 208)" d="M10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.001 10.000,-0.001 C4.477,-0.001 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 Z"></path>
                                    </svg>
                                    <svg class="img-shape shape-three">
                                        <path fill-rule="evenodd" fill="rgb(164, 206, 255)" d="M4.000,8.000 C6.209,8.000 8.000,6.208 8.000,3.999 C8.000,1.790 6.209,-0.001 4.000,-0.001 C1.791,-0.001 -0.000,1.790 -0.000,3.999 C-0.000,6.208 1.791,8.000 4.000,8.000 Z"></path>
                                    </svg>
                                    <svg class="img-shape shape-four">
                                        <path fill-rule="evenodd"  fill="rgb(251, 245, 162)"
                                        d="M5.000,10.000 C7.761,10.000 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.239,-0.000 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.239,10.000 5.000,10.000 Z"/>
                                    </svg>
                                    <svg class="img-shape shape-five">
                                        <path fill-rule="evenodd"  fill="rgb(255, 141, 189)"
                                        d="M10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 Z"/>
                                    </svg>
                                </div> */}
                {/* /.shape-wrapper */}
                {/* <div class="container">
                                    <div class="row">
                                        <div class="col-lg-5 order-lg-last mt-225 md-m0">
                                            <div class="theme-title-one">
                                                <div class="upper-title color-orange mb-5">Features</div>
                                                <h2 class="main-title">Our Provided <br><i>Features.</i></h2>
                                            </div> 
                                            /.theme-title-one */}
                {/* <p class="pt-40 pb-50">Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit animal iracundia. Ius te altera essent incorrupt. Id alien accu consetetur em.</p>
                                            <a href="service-v2.html" class="theme-btn line-button-one button-orange">More Details <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>  */}
                {/* /.col */}
                {/* <div class="col-lg-7 order-lg-first">
                                            <div class="row feature-block-wrapper">
                                                <div class="col-md-6">
                                                    <div class="feature-block-one mt-200 sm-mt-80 js-tilt">
                                                        <img src="assets/images/icon/icon23.svg" alt="">
                                                        <h5 class="pt-30 pb-25 tran3s title">Creative Layout.</h5>
                                                        <p class="tran3s">Lorem ipsum dolor amet, an dusino situ  sinto constituto, mir es pertin.</p>
                                                    </div>  */}
                {/* /.feature-block-one */}
                {/* </div> */}
                {/* /.col- */}
                {/* 
                                                <div class="col-md-6">
                                                    <div class="feature-block-one mb-40 mt-40 js-tilt">
                                                        <img src="assets/images/icon/icon24.svg" alt="">
                                                        <h5 class="pt-30 pb-25 tran3s title">UI/UX Analysis.</h5>
                                                        <p class="tran3s">Lorem ipsum dolor amet, an dusino situ  sinto constituto, mir es pertin.</p>
                                                    </div> */}
                {/* /.feature-block-one */}
                {/* <div class="feature-block-one js-tilt">
                                                        <img src="assets/images/icon/icon25.svg" alt="">
                                                        <h5 class="pt-30 pb-25 tran3s title">Strong Security.</h5>
                                                        <p class="tran3s">Lorem ipsum dolor amet, an dusino situ  sinto constituto, mir es pertin.</p>
                                                    </div>  */}
                {/* /.feature-block-one */}
                {/* </div>  */}
                {/* /.col- */}
                {/* </div>  */}
                {/* /.row */}
                {/* </div>  */}
                {/* /.col- */}
                {/* </div> */}
                {/* </div>  */}
                {/* /.container */}
                {/* </div> */}
                {/* /.our-core-feature */}
                {/* 
                            =============================================
                                About Us Three
                            ============================================== 
                            */}
                <div className="about-us-block-two pt-250 pb-150 md-pt-150 md-pb-100 pos-r">
                    <div className="inner-wrapper pos-r">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 order-lg-last">
                            <div className="theme-title-one">
                            <div className="upper-title mb-5 color-orange">About us</div>
                            <h2 className="main-title">ISC - Formateur d'execellence</h2>
                            </div> {/* /.theme-title-one */}
                            {/* <div class="mark-text pt-25 pb-35">Creative & Proffesional Digital</div> */}
                            <p className="pb-25">ISC formation, vous apporte les clés de la réussite. À travers un programme personnalisé, qui vise à vous garantir la réussite lors de votre examen de chauffeur VTC,TAXI et MOTO TAXI. Bénéficiez de notre programme de qualité et de nos conseils, à chaque étape de votre parcours. </p>
                            <p>vous transmettront leur savoir faire en s’appuyant sur une pédagogie et un enseignement de qualité, fruits de nombreuses années de pratique sur le terrain. Ils vous fourniront, les outils indispensables à votre succès futur . Avec notre centre de formation VTC,TAXI et MOTO TAXI agrée, lancez votre activité et adoptez les codes de la réussite.</p>
                            <a href="about-agency.html" className="theme-btn line-button-one button-orange mt-25">Explore More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                        </div>
                        <div className="col-xl-5  col-lg-6 ml-auto">
                            <div className="theme-counter-five md-mt-70">
                            <div className="inner-wrapper pos-r">
                                <div className="shape-wrapper">
                                <img src="assets/images/shape/dot-shape2.svg" alt="" className="shape-dot img-shape" />
                                <svg className="img-shape dot-one">
                                    <path fillRule="evenodd" fill="rgb(125, 236, 114)" d="M4.500,9.000 C6.985,9.000 9.000,6.985 9.000,4.500 C9.000,2.014 6.985,-0.001 4.500,-0.001 C2.015,-0.001 -0.000,2.014 -0.000,4.500 C-0.000,6.985 2.015,9.000 4.500,9.000 Z" />
                                </svg>
                                <svg className="img-shape dot-two">
                                    <path fillRule="evenodd" fill="rgb(255, 181, 106)" d="M13.000,26.000 C20.180,26.000 26.000,20.179 26.000,12.999 C26.000,5.820 20.180,-0.001 13.000,-0.001 C5.820,-0.001 -0.000,5.820 -0.000,12.999 C-0.000,20.179 5.820,26.000 13.000,26.000 Z" />
                                </svg>
                                <svg className="img-shape dot-three">
                                    <path fillRule="evenodd" fill="rgb(136, 217, 255)" d="M4.500,8.999 C6.985,8.999 9.000,6.985 9.000,4.500 C9.000,2.014 6.985,-0.000 4.500,-0.000 C2.015,-0.000 -0.000,2.014 -0.000,4.500 C-0.000,6.985 2.015,8.999 4.500,8.999 Z" />
                                </svg>
                                <svg className="img-shape dot-four">
                                    <path fillRule="evenodd" fill="rgb(255, 108, 196)" d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z" />
                                </svg>
                                <svg className="img-shape dot-five">
                                    <path fillRule="evenodd" fill="rgb(119, 244, 245)" d="M4.500,8.999 C6.985,8.999 9.000,6.985 9.000,4.500 C9.000,2.014 6.985,-0.000 4.500,-0.000 C2.015,-0.000 -0.000,2.014 -0.000,4.500 C-0.000,6.985 2.015,8.999 4.500,8.999 Z" />
                                </svg>
                                <svg className="img-shape dot-six">
                                    <path fillRule="evenodd" fill="rgb(165, 149, 255)" d="M15.000,30.000 C23.284,30.000 30.000,23.284 30.000,15.000 C30.000,6.715 23.284,-0.000 15.000,-0.000 C6.716,-0.000 -0.000,6.715 -0.000,15.000 C-0.000,23.284 6.716,30.000 15.000,30.000 Z" />
                                </svg>
                                <svg className="img-shape dot-seven">
                                    <path fillRule="evenodd" fill="rgb(102, 225, 158)" d="M5.500,11.000 C8.537,11.000 11.000,8.537 11.000,5.500 C11.000,2.462 8.537,-0.001 5.500,-0.001 C2.462,-0.001 -0.000,2.462 -0.000,5.500 C-0.000,8.537 2.462,11.000 5.500,11.000 Z" />
                                </svg>
                                </div> {/* /.shape-wrapper */}
                                <div className="counter-wrapper">
                                <div className="single-counter-box bx-one" style={{background: 'rgba(0,161,255,0.54)'}}>
                                    <h2 className="number"><span className="timer" data-from={0} data-to={16} data-speed={1200} data-refresh-interval={5}>0</span>k</h2>
                                    <p>Projects</p>
                                </div> {/* /.single-counter-box */}
                                <div className="single-counter-box bx-two" style={{background: 'rgba(255,173,58,0.67)'}}>
                                    <h2 className="number"><span className="timer" data-from={0} data-to={1230} data-speed={1200} data-refresh-interval={5}>0</span></h2>
                                    <p>Offices</p>
                                </div> {/* /.single-counter-box */}
                                <div className="single-counter-box bx-three" style={{background: 'rgba(140,39,255,0.54)'}}>
                                    <h2 className="number"><span className="timer" data-from={0} data-to={3} data-speed={1200} data-refresh-interval={5}>0</span>k</h2>
                                    <p>Works</p>
                                </div> {/* /.single-counter-box */}
                                </div> {/* /.counter-wrapper */}
                            </div>
                            </div> {/* /.theme-counter-five */}
                        </div>
                        </div>
                        <div className="row mt-60">
                        <div className="col">
                            <div className=" d-flex align-items-center ">
                            <div className="wheel p-3 rounded ">
                                <i className="fas fa-wheelchair " />
                            </div>
                            <div className=" wheel-text ">
                                Si vous êtes en situation de handicap et vous souhaitez suivre l'une de nos formations, faites-le nous savoir, nous mettrons tout en œuvre pour trouver une solution adaptée.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> {/* /.container */}
                    </div> {/* /.inner-wrapper */}
                </div> {/* /.about-us-block-two */}
                <div className="about-us-block-two py-5 md-pt-150 md-pb-100 pos-r suivant-sec ">
                    <div className="container">
                    <div className="row p-5 align-items-center">
                        <div className="col-md-6">
                        <h3 className="text-white">Hundreds of people have already trusted ISC</h3>
                        <p className="text-light-white mt-2"> Why not you ?</p>
                        </div>
                        <div className="col-md-2 text-center single-counter-box bx-one">
                        <h2 className="pb-0 text-white number fw-bold"><span className="timer" data-from={0} data-to={90} data-speed={1200} data-refresh-interval={5}>0</span></h2>
                        <h6 className="pb-0 text-white number">%</h6>
                        <p className="text-light-white mt-2">recommendations</p>
                        </div>
                        <div className="col-md-2 text-center single-counter-box bx-one">
                        <h2 className="pb-0 text-white number"><span className="timer" data-from={0} data-to={96} data-speed={1200} data-refresh-interval={5}>0</span></h2>
                        <h4 className="pb-0 text-white number">%</h4>
                        <p className="text-light-white mt-2">Satisfaction</p>
                        </div>
                        <div className="col-md-2 text-center single-counter-box bx-one">
                        <h2 className="pb-0 text-white number"><span className="timer" data-from={0} data-to={1500} data-speed={1200} data-refresh-interval={5}>0</span></h2>
                        <h4 className="pb-0 text-white number">+</h4>
                        <p className="text-light-white mt-2">Trained Trainees</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 
                            =============================================
                                Our Service One
                            ============================================== 
                            */}
                <div className="our-service-three pt-60 pos-r pb-150 md-pb-100 md-pt-110">
                    <div className="shape-wrapper">
                    <img src="assets/images/home/shape1.png" alt="" className="img-shape shape-one" />
                    <svg className="img-shape shape-two">
                        <path fillRule="evenodd" fill="rgb(168, 255, 243)" d="M7.500,14.999 C11.642,14.999 15.000,11.642 15.000,7.500 C15.000,3.357 11.642,-0.001 7.500,-0.001 C3.358,-0.001 -0.000,3.357 -0.000,7.500 C-0.000,11.642 3.358,14.999 7.500,14.999 Z" />
                    </svg>
                    <svg className="img-shape shape-three">
                        <path fillRule="evenodd" fill="rgb(255, 164, 164)" d="M15.000,30.000 C23.284,30.000 30.000,23.284 30.000,15.000 C30.000,6.715 23.284,-0.000 15.000,-0.000 C6.716,-0.000 -0.000,6.715 -0.000,15.000 C-0.000,23.284 6.716,30.000 15.000,30.000 Z" />
                    </svg>
                    <svg className="img-shape shape-four">
                        <path fillRule="evenodd" fill="rgb(255, 216, 142)" d="M5.000,10.000 C7.761,10.000 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.238,-0.000 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.238,10.000 5.000,10.000 Z" />
                    </svg>
                    <svg className="img-shape shape-five">
                        <path fillRule="evenodd" fill="rgb(142, 244, 229)" d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.499 C15.000,3.357 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.357 -0.000,7.499 C-0.000,11.642 3.358,15.000 7.500,15.000 Z" />
                    </svg>
                    <svg className="img-shape shape-six">
                        <path fillRule="evenodd" opacity="0.541" fill="rgb(255, 252, 231)" d="M171.500,343.000 C266.217,343.000 343.000,266.216 343.000,171.500 C343.000,76.783 266.217,-0.001 171.500,-0.001 C76.783,-0.001 -0.000,76.783 -0.000,171.500 C-0.000,266.216 76.783,343.000 171.500,343.000 Z" />
                    </svg>
                    </div> {/* /.shape-wrapper */}
                    <div className="container">	
                    <div className="theme-title-one text-center pb-50 md-pb-30">
                        <h2 className="main-title">Nos Formations VTC:</h2>
                    </div> {/* /.theme-title-one */}
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-one" style="background: #b471ff;"><img src="assets/images/icon/icon26.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Intensive</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-two" style="background: #39f1a7;"><img src="assets/images/icon/icon27.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Initiale</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                    </div>
                    <div className="theme-title-one text-center ">
                        <h2 className="main-title heading">Nos Formations MOTO TAXI</h2>
                    </div> {/* /.theme-title-one */}
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-one" style="background: #b471ff;"><img src="assets/images/icon/icon26.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Intensive</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-two" style="background: #39f1a7;"><img src="assets/images/icon/icon27.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Initiale</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                    </div>
                    <div className="theme-title-one text-center ">
                        <h2 className="main-title heading">Nos Formations  TAXI</h2>
                    </div> {/* /.theme-title-one */}
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-one" style="background: #b471ff;"><img src="assets/images/icon/icon26.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Intensive</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                        <div className="col-lg-6">
                        <div className="feature-block-three mt-50">
                            <div className="d-flex align-items-start">
                            {/* <div class="icon-box icon-two" style="background: #39f1a7;"><img src="assets/images/icon/icon27.svg" alt=""></div> */}
                            <div className="text px-0">
                                <h5 className="fs-18 text-uppercase  mb-3">Formation Initiale</h5>
                                <div className="service-box-content-new ">
                                <ul className="service-list ">
                                    <li>Validation de l'inscription auprès de la Chambre de Métiers</li>
                                    <li>E-Learning (cours et Qcm de révision)</li>
                                    <li>1 semaine de Formation en salle (35h) et Examen Blanc</li>
                                    <li>Mise en situation Réelle avec Véhicule aux normes examen</li>
                                    <li>Demandez un Devis</li>
                                </ul>
                                </div>
                                <div className="service-box-new-link ">
                                <a href="s-mechanical.html " className="read-more tran3s "><i className="flaticon-next-1" /></a>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.feature-block-three */}
                        </div>
                    </div>
                    </div> {/* /.container */}
                </div> {/* /.our-service */}
                {/* <section> */}
                <section>
                    <div className="session-full  suivant-sec  bg-gray-light">
                    <div className="container pt-10 pt-md-14 pb-10 ">
                        <div className="p-5 text-center ">
                        Suivant votre situation, plusieurs solutions de <a href=" ">financement</a>  de votre formation sont possibles.
                        </div>
                    </div>
                    </div>
                </section>
                <div className="session-full pt-10 pt-md-14 pb-8 bg-gray-light ">
                    <div className="container ">
                    <div className="section-content ">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center ">
                        <div className="wt-small-separator site-text-primary ">
                        </div>
                        <h2 className="main-title heading">Prochaines sessions</h2>
                        </div>
                        {/* TITLE END*/}   
                        <div className="row ">
                        <div className="col-lg-5 ">
                            .
                            <div className="feature-block-three  bg-white  ">
                            <div className="service-box-title-new title-style-2 site-text-secondry ">
                                <h5 className="fs-18 text-uppercase pt-1 mb-3">Contact Information</h5>
                            </div>
                            <p>
                            </p><div>Inscrivez-vous vite pour les prochains examens VTC,Taxi et Moto Taxi !</div>
                            <div>Vous pouvez vous inscrire à nos formations jusqu’à 48 heures avant le début de la formation.</div>
                            <div>Pour les modalités d’inscriptions, merci de nous contacter par</div>
                            <p />
                            <div className="py-2 ">
                                <div className="widget recent-posts-entry ">
                                {/* <li><i class="fa fa-map-marker "></i>ISC FORMATION 18 Rue de Villeneuve CP <br> 90180 94563 Rungis cedex
                                                                        <br> N° agrément 94 16_002/li> */}
                                <a href><i className="fa fa-envelope mr-3" />contact@iscformation.fr</a>
                                <a href> <i className="fa fa-phone-alt mr-3" />09 83 71 29 00 </a>
                                <div className="py-2">Via notre formulaire de contact</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ">
                            <div className="feature-block-three  bg-white ">
                            <table className="table table-responsive table-sm">
                                <tbody><tr>
                                    <td>
                                    <div className="service-box-title-new title-style-2 site-text-secondry pb-0 mb-0 ">
                                        <h5 className="fs-18 text-uppercase  mb-3">Date de l'examen</h5>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="service-box-title-new title-style-2 site-text-secondry mb-0 pb-0 ">
                                        <h5 className="fs-18 text-uppercase  mb-3">Date limite d'inscription du candidat</h5>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td>Mardi 26 Janvier 2021</td>
                                    <td>Vendredi 18 Décembre 2020</td>
                                </tr>
                                <tr>
                                    <td>Mardi 23 février 2021</td>
                                    <td>Vendredi 22 janvier 2021</td>
                                </tr>
                                <tr>
                                    <td>Mardi 27 avril 2021</td>
                                    <td>Vendredi 26 mars 2021</td>
                                </tr>
                                <tr>
                                    <td>Mardi 27 avril 2021</td>
                                    <td>Vendredi 26 mars 2021</td>
                                </tr>
                                <tr>
                                    <td>
                                    Mardi 29 juin 2021
                                    </td>
                                    <td>Vendredi 28 mai 2021</td>
                                </tr>
                                <tr>
                                    <td>Mardi 28 septembre 2021</td>
                                    <td>Vendredi 27 août 2021</td>
                                </tr>
                                <tr>
                                    <td>Mardi 26 octobre 2021</td>
                                    <td>Vendredi 24 septembre 2021</td>
                                </tr>
                                <tr>
                                    <td>Mardi 30 novembre 2021</td>
                                    <td>Vendredi 29 octobre 2021</td>
                                </tr>
                                </tbody></table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <section className="py-3 my-5">
                    <div className="session-full  suivant-sec  bg-gray-light">
                    <div className="container pt-10 pt-md-14 pb-10 ">
                        <div className="p-5 text-center " style={{fontSize: '30px'}}>
                        <span className=" mr-3"> <i className="fas fa-phone-alt mr-2" />
                            Call Now: </span> 09 83 71 29 00
                        </div>
                    </div>
                    </div>
                </section>
                </div>


        </Fragment>
    )
}

export default Home
