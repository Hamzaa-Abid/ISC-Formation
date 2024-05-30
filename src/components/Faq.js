import React, {useEffect } from 'react';
import { Fragment } from 'react'

function Faq() {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <Fragment>
            <div>
                {/* 
                            =============================================
                                Inner Banner
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
                    {/* <p>Get In touch</p> */}
                    <h2 className="pt-30 pb-15">FAQs </h2>
                    <p className="sub-heading">Find your answer here or ask for help.</p>
                    </div>
                </div> {/* /.text-inner-banner-one */}
                {/* /.inner-banner */}
                <div className="container">
                </div>
                {/* 
                            =============================================
                                Faq Page
                            ============================================== 
                            */}
                <div className="faq-page faq-tab-wrapper py-5">
                    <div className="container">
                    <div className="my-3">
                        <ul className="nav nav-pills " id="myTab" role="tablist">
                        <li className="nav-item nav-btn">
                            <a className="nav-link active" id="continue" data-toggle="tab" href="#continue-tab" role="tab" aria-controls="continue-tab" aria-selected="true"> <i className="fas fa-sync-alt mr-2" /> FORMATION</a>
                        </li>
                        <li className="nav-item nav-btn">
                            <a className="nav-link " id="intensive" data-toggle="tab" href="#intensive-tab" role="tab" aria-controls="intensive-tab" aria-selected="false"> <i className="far fa-clock mr-2" /> INTENSIVE</a>
                        </li>
                        <li className="nav-item nav-btn">
                            <a className="nav-link " id="initiale" data-toggle="tab" href="#initiale-tab" role="tab" aria-controls="initiale-tab" aria-selected="false"><i className="fas fa-graduation-cap mr-2" /> INTIALE</a>
                        </li>
                        </ul>
                    </div>
                    <div className="tab-content " id="myTabContent">
                        <div className="tab-pane show  active" id="continue-tab" role="tabpanel" aria-labelledby="continue">
                        {/* <div class="d-md-flex justify-content-between align-items-center mb-80"> */}
                        {/* <form action="#" class="faq-search-form sm-mt-30">
                                            <input type="text" placeholder="Search here..">
                                            <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                        </form> */}
                        {/* </div> */}
                        <div className="row my-4">
                            <div className="col-md-6">
                            <div className="feature-block-three">
                                <img src="assets/images/formation-vtc-continue.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className>
                                <div className>
                                <img src="assets/images/image.PNG" alt="" className="mx-auto" width={150} />
                                </div>
                                <div className="card-body p-2">
                                <p className="card-text continue-text">Tous les chauffeurs VTC, sont tenus de suivre
                                    un stage de formation continue dispensée par un centre de formation agréé,
                                    tels que le nôtre, tous les 5 ans à compter de la date d’obtention de leur
                                    carte professionnelle VTC.</p>
                                <div className="text-right mt-3"><button className="theme-btn line-button-one button-orange ml-auto  radius3"> S'inscrire
                                    </button></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            {/* ================== FAQ Panel ================ */}
                            <div className="faq-panel">
                                <div className="panel-group theme-accordion" id="accordion">
                                <div className="panel">
                                    <div className="panel-heading active-panel">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        Descriptif</a>
                                    </h6>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse show">
                                    <div className="panel-body">
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-thumbtack mr-2" /> Objectifs :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Mettre à
                                        jour vos connaissances et être au courant des dernières
                                        innovations technologiques de la profession.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Avoir une
                                        attestation de suivi de la formation continue VTC d'une validité
                                        de 5 ans
                                        </p>
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-users mr-2" /> Public concerné :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Conducteurs de voiture de tourisme ayant obtenu leur carte
                                        professionnelle antérieurement au 1er janvier 2014.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Conducteurs de voiture de tourisme ayant obtenu leur carte
                                        professionnelle depuis près de 5 ans.
                                        </p>
                                        <p className=" py-2">
                                        <span className="font-weight-bold"><i className="far fa-clock mr-2" />
                                            Durée</span>
                                        <span className="text-muted">14 heures (2 jours).</span>
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 1 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                        Programme</a>
                                    </h6>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p className="font-weight-bold py-3">
                                        A. Droits des transports publics particuliers et des transports
                                        collectifs assurés sous la forme de services occasionnels
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Actualisation des connaissances listées au A Annexe I
                                        </p>
                                        <p className="font-weight-bold py-3">
                                        B. Sécurité routière
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Actualisation des connaissances listées au A Annexe I
                                        </p>
                                        <p className="font-weight-bold py-3">
                                        C. Les nouvelles attentes de la clientèle
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Innovation dans la gestion de la relation client
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Innovation dans les méthodes de mise en relation avec les
                                        clients
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Evolutions des pratiques professionnelles
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Mise à
                                        niveau des connaissances géographiques et topographiques
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Nouvelles
                                        formes juridiques et dispositions fiscales et d’imposition
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 2 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                        Pièces à fournir</a>
                                    </h6>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Copie du
                                        permis de conduire de catégorie B en cours de validité et dont
                                        le nombre maximal de points n’est pas affecté par le délai
                                        probatoire prévu à l’article L.223-1 du code de la route
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Copie
                                        d’un justificatif de domicile à votre nom, datant de moins de 3
                                        mois. (Quittance de loyer / facture EDF / attestation Sécurité
                                        Sociale). Si le justificatif de domicile n’est pas à votre nom,
                                        joindre une attestation d’hébergement et une copie de la pièce
                                        d’identité de l’hébergeur.
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 3 */}
                                </div> {/* end #accordion */}
                            </div> {/* End of .faq-panel */}
                            </div> {/* /.col- */}
                        </div> {/* /.row */}
                        </div>
                        <div className="tab-pane " id="intensive-tab" role="tabpanel" aria-labelledby="intensive">
                        <div className="row my-4 align-items-center">
                            <div className="col-md-6">
                            <div className="feature-block-three">
                                <img src="assets/images/formation-initiale.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className>
                                {/* <div class="">
                                                        <img src="assets/images/image.PNG" alt="" class="mx-auto" width="150">
                                                    </div> */}
                                <div className="card-body p-2">
                                <p className="card-text continue-text">Tous les chauffeurs VTC, sont tenus de suivre
                                    un stage de formation continue dispensée par un centre de formation agréé,
                                    tels que le nôtre, tous les 5 ans à compter de la date d’obtention de leur
                                    carte professionnelle VTC.</p>
                                <div className="text-right mt-3"><button className="theme-btn line-button-one button-orange ml-auto radius3"> S'inscrire
                                    </button></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            {/* ================== FAQ Panel ================ */}
                            <div className="faq-panel">
                                <div className="panel-group theme-accordion" id="accordion">
                                <div className="panel">
                                    <div className="panel-heading active-panel">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        Descriptif</a>
                                    </h6>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse show">
                                    <div className="panel-body">
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-thumbtack mr-2" /> Objectifs :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Obtenir la carte professionnelle VTC
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Acquérir des notions solides en langue anglaise
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Acquérir des notions de gestion d’entreprise
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Renforcer ses compétences commerciales et relationnelles
                                        </p>
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-users mr-2" /> Public concerné :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Conducteurs de voiture de tourisme ayant obtenu leur carte
                                        professionnelle antérieurement au 1er janvier 2014.
                                        </p>
                                        <p className="pb-2">Cette formation est ouverte à tout public; toutefois certains pré-requis sont nécessaires :</p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Être titulaire du permis B en cours de validité depuis au moins 3 ans
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Avoir le bulletin n°2 de casier judiciaire vierge
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Être titulaire du diplôme "Prévention et Secours Civiques de niveau 1" depuis moins de 2 ans
                                        </p>
                                        <p className=" py-2">
                                        <span className="font-weight-bold"><i className="far fa-clock mr-2" />
                                            Durée</span>
                                        <span className="text-muted">14 heures.</span>
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 1 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                        Programme</a>
                                    </h6>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p className="pb-2" />
                                        <p className="font-weight-bold pb-1">
                                        A.	Réglementation du transport public particulier de personnes.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        B. Gestion.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        C. Sécurité routière.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        D. Capacité d’expression et de compréhension en langue française.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        E. Capacité d’expression et de compréhension en langue anglaise.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        F. Développement commercial et la gestion propre à l’activité de VTC.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        G. Réglementation nationale spécifique de l’activité de VTC.
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 2 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                        Pièces à fournir</a>
                                    </h6>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Pièce d'identité
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Permis de conduire
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />Justificatif de domicile
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Attestation Médicale + Une Photo d'identité
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Attestation PSC1 ou SST
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 3 */}
                                </div> {/* end #accordion */}
                            </div> {/* End of .faq-panel */}
                            </div> {/* /.col- */}
                        </div> {/* /.row */}
                        </div>
                        <div className="tab-pane " id="initiale-tab" role="tabpanel" aria-labelledby="initiale">
                        <div className="row my-4 align-items-center">
                            <div className="col-md-6">
                            <div className="feature-block-three">
                                <img src="assets/images/formation-initiale.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className>
                                {/* <div class="">
                                                        <img src="assets/images/image.PNG" alt="" class="mx-auto" width="150">
                                                    </div> */}
                                <div className="card-body p-2">
                                <p className="card-text continue-text">Tous les chauffeurs VTC, sont tenus de suivre
                                    un stage de formation continue dispensée par un centre de formation agréé,
                                    tels que le nôtre, tous les 5 ans à compter de la date d’obtention de leur
                                    carte professionnelle VTC.</p>
                                <div className="text-right mt-3"><button className="theme-btn line-button-one button-orange ml-auto radius3"> S'inscrire
                                    </button></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            {/* ================== FAQ Panel ================ */}
                            <div className="faq-panel">
                                <div className="panel-group theme-accordion" id="accordion">
                                <div className="panel">
                                    <div className="panel-heading active-panel">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        Descriptif</a>
                                    </h6>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse show">
                                    <div className="panel-body">
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-thumbtack mr-2" /> Objectifs :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Obtenir la carte professionnelle VTC
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Obtenir le titre « Prévention et secours civique (niveau 1) »
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Renforcer ses compétences commerciales et relationnelles
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Acquérir des notions solides en langue anglaise
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" /> Acquérir des notions de gestion d’entreprise
                                        </p>
                                        <p className="font-weight-bold py-3">
                                        <i className="fas fa-users mr-2" /> Public concerné :
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Conducteurs de voiture de tourisme ayant obtenu leur carte
                                        professionnelle antérieurement au 1er janvier 2014.
                                        </p>
                                        <p className="pb-2">Cette formation est ouverte à tout public; toutefois certains pré-requis sont nécessaires :</p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Être titulaire du permis B en cours de validité depuis au moins 3 ans
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Avoir passé une visite médicale auprès d'un médecin agrée par la Préfecture de son département
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Avoir le bulletin n°2 de casier judiciaire vierge
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir parler correctement le français
                                        </p>
                                        <p className=" py-2">
                                        <span className="font-weight-bold"><i className="far fa-clock mr-2" />
                                            Durée : 14 heures.</span>
                                        <span className="text-muted">14 heures.</span>
                                        </p>
                                        <p className=" pb-3">
                                        <span className="font-weight-bold"><i className="fas fa-thumbs-up" />
                                            Pourquoi avoir choisir ISC :</span>
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Possibilité de mise en relation avec un cabinet d’expertise comptable spécialisée dans la création des entreprises.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Aide et conseils sur les démarches d’inscription au registre des transporteurs routiers.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Possibilité de mise en relation avec un Web designer pour la création de site Internet, carte de visites.
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 1 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                        Programme</a>
                                    </h6>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p className="pb-2" />
                                        <p className="font-weight-bold pb-1">
                                        A.	Réglementation du transport public particulier de personnes.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les textes législatifs et réglementaires s’appliquant au transport collectif et aux Voitures de Transport avec Chauffeur
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les divers organismes administratifs, consultatifs et professionnels en transport de personnes et leur rôle
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les conditions d’accès à la profession
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles relatives à la capacité financière de l’exploitant et les démarches à effectuer auprès du ministère chargé des transports pour la justifier
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les documents relatifs à l’exécution de la prestation de transport, au conducteur, au véhicule qui doivent être présentés en cas de contrôle
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les agents susceptibles de procéder à des contrôles en entreprise ou sur notre route et leurs prérogatives respectives
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les sanctions administratives et/ou pénales encourues en cas d’infraction à la réglementation
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les obligations du conducteur en matière d’assurance, l’identification des assurances obligatoires et les conséquences à ne pas être assuré
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        B. Gestion.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître et savoir appliquer les principes de base de gestion et de comptabilité :
                                        </p>
                                        <ul className="faq-list">
                                        <li className="py-1">connaître les obligations et documents comptables ;</li>
                                        <li className="py-1">connaître les charges entrant dans le calcul du coût de revient et les classer en charges fixes et charges variables ;</li>
                                        <li className="py-1">connaître les principes de base pour déterminer le produit d’exploitation, le bénéfice, le résultat, les charges, le seuil de rentabilité ;</li>
                                        <li className="py-1">connaître les principes de l’amortissement.</li>
                                        </ul>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître les différentes formes juridiques d’exploitation (EI, EIRL, EURL, SARL, SASU,SCOP…) 
                                        </p>
                                        <p className="pb-2">- connaître les modes d’exploitation (exploitation directe, location-gérance...).</p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître les différents régimes d’imposition et déclarations fiscales.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître les différentes formalités déclaratives.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître la composition et le rôle des chambres des métiers et de l’artisanat.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir définir les différents régimes sociaux (régime général, régime social des indépendants)
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        comprendre les principes de cotisations et prestations par branche (maladie, vieillesse, chômage...).
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir établir un devis pour la réalisation d’une prestation et établir la facturation
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir calculer le coût de revient en formule simple (formule monôme et binôme)
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir définir la notion de marge et l’utiliser pour calculer un prix de vente.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        C. Sécurité routière.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir appliquer les règles du code de la route (signalisation, règles de circulation, comportement du conducteur, usage ceinture de sécurité, utilisation des voies dédiées...) ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître et éviter les risques liés à l’alcoolémie, l’usage de stupéfiants, la prise de médicaments, le stress, la fatigue ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître les principes de conduite rationnelle pour économiser le carburant, réduire le bruit et préserver le matériel et l’environnement ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir appliquer les règles de sécurité concernant l’utilisation des téléphones et ordiphones dans les véhicules ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir respecter les obligations en matière d’entretien et de visite technique des véhicules ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir appliquer les règles de conduite à tenir en cas d’accident (protection des victimes, alerte des secours, premiers secours à porter...) ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir rédiger un constat amiable d’accident matériel ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître les sanctions des infractions au code de la route ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître la réglementation du permis de conduire (permis à points, permis probatoire, annulation, invalidation et suspension de permis) ;
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir prendre en charge des passagers et leurs bagages en assurant la sécurité des personnes et des biens.
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        D. Capacité d’expression et de compréhension en langue française.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Comprendre un texte simple ou des documents en lien, notamment, avec l'activité des transports.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Comprendre et s’exprimer en français pour :
                                        </p>
                                        <ul className="faq-list">
                                        <li className="py-1">accueillir la clientèle</li>
                                        <li className="py-1">comprendre les demandes des clients</li>
                                        <li className="py-1">interroger les clients sur leur confort</li>
                                        <li className="py-1">tenir une conversation neutre et courtoise avec les clients durant le transport</li>
                                        <li className="py-1">prendre congé des clients</li>
                                        </ul>
                                        <p className="font-weight-bold pb-1">
                                        E. Capacité d’expression et de compréhension en langue anglaise.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Comprendre et s’exprimer en anglais, au niveau A2 du Cadre Européen Commun de Référence pour les Langues, pour :
                                        </p>
                                        <ul className="faq-list">
                                        <li className="py-1">Accueillir la clientèle</li>
                                        <li className="py-1">Comprendre les demandes des clients</li>
                                        <li className="py-1">Demander des renseignements concernant le confort de la clientèle</li>
                                        <li className="py-1">Tenir une conversation très simple durant le transport</li>
                                        <li className="py-1">Prendre congé des clients.
                                        </li>
                                        </ul>
                                        <p className="font-weight-bold pb-1">
                                        F. Développement commercial et la gestion propre à l’activité de VTC.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Préparer la mission : définir le besoin du client, établir un devis
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir accueillir le client
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Connaître l'attitude et la présentation du chauffeur
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir être discret, courtois et respectueux du client
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir ouvrir une porte dans les règles de l'art
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Savoir utiliser un GPS
                                        </p>
                                        <p className="font-weight-bold pb-1">
                                        G. Réglementation nationale spécifique de l’activité de VTC.
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les obligations en matière d’entretien et de visite technique des véhicules
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Le mécanisme du permis à points
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles du code de la route : restrictions de circulation, les limitations de vitesse, utilisation de la ceinture de sécurité
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles d’une conduite rationnelle pour économiser le carburant, réduire le bruit et préserver le matériel et l’environnement
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles de conduite à tenir en cas d’accident
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les risques liés à l’alcoolémie, l’usage de stupéfiants, la prise de médicaments, le stress, la fatigue
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles de prudence pour préserver la sécurité
                                        </p>
                                        <p className="pb-1">
                                        <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                        Les règles de sécurité concernant l’utilisation du téléphone
                                        </p>
                                    </div>
                                    </div>
                                </div> {/* /panel 2 */}
                                <div className="panel">
                                    <div className="panel-heading">
                                    <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                        Pièces à fournir</a>
                                    </h6>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                    <div className="panel-body">
                                    </div>
                                    </div>
                                </div> {/* /panel 3 */}
                                </div> {/* end #accordion */}
                            </div> {/* End of .faq-panel */}
                            </div> {/* /.col- */}
                        </div> {/* /.row */}
                        </div>
                    </div>
                    </div> {/* /.container */}
                    {/* <form action="#" class="submit-faq theme-form-style-five md-mt-100">
                                    <div class="container">
                                        <h3 class="faq-page-title text-center">Did’nt Find Answer, Submit Your Question.</h3>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6"><input type="text" placeholder="Your Name*"></div>
                                            <div class="col-lg-4 col-md-6"><input type="email" placeholder="Your Mail*"></div>
                                            <div class="col-lg-4"><input type="text" placeholder="Subject*"></div>
                                            <div class="col-12"><textarea placeholder="Your Question*"></textarea></div>
                                            <div class="col-12"><button class="theme-button-three">Submit Questions</button></div>
                                        </div>
                                    </div>
                                </form> */}
                    <section className="suivant-sec yp-4">
                    <div className="container">
                        <div className="row py-5">
                        <div className="col-lg-8 col-sm-12">
                            COMMENT FINANCER VOTRE FORMATION VTC ?
                        </div>
                        <div className="col-lg-4 col-sm-12 text-right">
                            <button className="btn btn-outline-light ">
                            Voir types de financement
                            </button>
                        </div>
                        </div>
                    </div>
                    </section>
                </div> {/* /.faq-page */}
                </div>

        </Fragment>
    )
}

export default Faq
