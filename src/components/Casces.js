import React, {useEffect } from 'react';
import { Fragment } from 'react'

function Casces() {

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
                    <h2 className="pt-30 pb-15">Formations CACES R386 </h2>
                    {/* <p class="sub-heading"> */}
                    <ul className="breadcrumb top-breadcrumb">
                        <li className="breadcrumb-item">Accueil</li>
                        <li className="breadcrumb-item active"><a href>Formations CACES R386</a> </li>
                    </ul>
                    {/* </p> */}
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
                    {/* <div class="d-md-flex justify-content-between align-items-center mb-80"> */}
                    {/* <form action="#" class="faq-search-form sm-mt-30">
                                            <input type="text" placeholder="Search here..">
                                            <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                        </form> */}
                    {/* </div> */}
                    <h6 className="py-2 font-weight-bold">Les différentes catégories de chariots enseignés :</h6>
                    <div className="row my-4">
                        <div className="col-md-7">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <h4 className="py-2 caces-heading">Catégorie 1A</h4>
                            <p className="py-0 small-text">Utiliser une plate-forme élévatrice mobile de personnel</p>
                            </div>
                            <div className="col-md-6">
                            <img src="images/caces/cases-r386-1A.png" alt="" />
                            </div>
                            <div className="col-md-6">
                            <h4 className="py-2 caces-heading">Catégorie 1B</h4>
                            <p className="py-0 small-text">Utiliser une plate-forme élévatrice mobile de personnel</p>
                            </div>
                            <div className="col-md-6">
                            <img src="images/caces/cases-r386-1B.png" alt="" />
                            </div>
                            <div className="col-md-6">
                            <h4 className="py-2 caces-heading">Catégorie #A</h4>
                            <p className="py-0 small-text">Utiliser une plate-forme élévatrice mobile de personnel</p>
                            </div>
                            <div className="col-md-6">
                            <img src="images/caces/cases-r386-3A.png" alt="" />
                            </div>
                            <div className="col-md-6">
                            <h4 className="py-2 caces-heading">Catégorie 3B</h4>
                            <p className="py-0 small-text">Utiliser une plate-forme élévatrice mobile de personnel</p>
                            </div>
                            <div className="col-md-6">
                            <img src="images/caces/cases-r386-3B.png" alt="" />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-5">
                        <div className>
                            <div className="card-body p-2">
                            <p className="card-text continue-text">CACES conducteurs de nacelles de catégorie 3A (R386) Utilisez une Plate Forme Elevatrice Mobile de Personnel de la catégorie désignée en toute sécurité dans son activité</p>
                            <p>Les nacelles et plates-formes élévatrices sont des appareils de levage permettant de travailler en hauteur. Ces appareils de levage ne doivent être manipulés que par des personnes formées et autorisées, dans le respect des règles d’utilisation. La recommandation R386 de la CNAMTS définit les conditions d’utilisation des Plates-formes Elévatrices Mobiles de Personnes (PEMP).</p>
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
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1a" style={{fontWeight: 'bold', color: '#43a7cc'}}>
                                    Catégorie Prix et Planning</a>
                                </h6>
                                </div>
                                <div id="collapse1a" className="panel-collapse collapse show">
                                <div className="panel-body">
                                    <p className="font-weight-bold py-3">
                                    <i className="fas fa-thumbtack mr-2" /> Formation CACES Chariot R386 :
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Formation Autorisation de Conduite Interne PEMP-Nacelle R386 - 1 jour = 290€ net de taxe/Stagiaire pour 1 jour de formation
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Recyclage ou Renouvellement/ 1 catégorie 2 jours= Tarif à partir de 550 € net de taxe/Stagiaire
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Expérimenté ou Recyclage ou Renouvellement / 2 catégories 2 jours= Tarif à partir de 650 € net de taxe/Stagiaire
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Initial ou Débutant/ 1 catégorie OU Expérimenté ou Recyclage ou Renouvellement / 1 catégorie 3 jours= Tarif à partir de 740 € net de taxe/Stagiaire
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Initial / Débutant/ 2 catégories / Recyclage ou Renouvellement de 2 catégories 3 jours= Tarif à partir de 820€ net de taxe/Stagiaire
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    Planning Prochaines Sessions
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 2 à 5 Janvier
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 8 à 11 Janvier
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 15 à 18 Janvier
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 22 à 25 Janvier
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    29, 30, 31 Janvier et 1er Février
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 5 à 8 Février
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 12 à 15 Février
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 19 à 22 Février
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    26, 27, 28 Février et 1er Mars
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 5 à 8 Mars
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 12 à 15 Mars
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 19 à 22 Mars
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 26 à 29 Mars
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 3 à 6 Avril
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 9 à 12 Avril
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    De 16 à 19 Avril
                                    </p>
                                </div>
                                </div>
                            </div> {/* /panel 1 */}
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
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Conduire en sécurité et entretenir (maintenance de premier niveau) une plate-forme élévatrice mobile de personne, selon la recommandation CNAM-TS R 386.
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    <i className="fas fa-users mr-2" /> Public concerné :
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Être âgé de 18 ans
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Être apte médicalement
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Conduire en sécurité et entretenir (maintenance de premier niveau) une plate-forme élévatrice mobile de personne, selon la recommandation CNAM-TS R 386.
                                    </p>
                                    <p className=" py-2">
                                    <span className="font-weight-bold"><i className="far fa-clock mr-2" />
                                        Durée :  Variable selon le niveau initial des participants</span>
                                    </p>
                                </div>
                                </div>
                            </div> {/* /panel 2 */}
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
                                    A. Réglementation
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Obligation du constructeur, des employeurs
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Responsabilités du conducteur
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    B. Classification &amp; technologie
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Classification par catégorie
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Technologie des différents organes de la P.E.M.P.
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    C. Caractéristiques    
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Identification des caractéristiques de chaque catégorie de P.E.M.P.
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Utilisations courantes, avantages et inconvénients
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" />
                                    Principaux risques : renversement, chute, heurt, électrisation, etc.
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    D. Sécurité    
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Règles de stabilité et de mise en œuvre, 
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Règles de conduite, de circulation, de stationnement, 
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Adéquation de la P.E.M.P.
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Charge nominale
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Hauteur et nature du travail
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Distances de sécurité avec les conducteurs électriques, 
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Organes de sécurité
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Vérifications et entretien courant à effectuer
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> Consignes et manœuvres liées à l’utilisation des postes de secours
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    E. Adéquation
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Examen d’adéquation
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    F. Vérifications
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Contrôle visuel de l’état de la P.E.M.P.
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Fonctionnement des dispositifs de sécurite.
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    G. Positionnement, conduite, circulation
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Gestes de commandement et de communication
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Positionnement en fonction du travail et de l’environnement
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Balisage et signalisation
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Mise en service de la P.E.M.P.
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Mise en place des stabilisateurs
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Mise à niveau de la P.E.M.P.
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Réalisation de manœuvres avec souplesse et précision
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Circulation en P.E.M.P. (pour les catégories concernées), adaptation de la conduite selon les conditions de circulation
                                    </p>
                                    <p className="font-weight-bold py-3">
                                    H. Secours
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Manœuvres de secours
                                    </p>
                                    <p className="pb-1">
                                    <i className="fas fa-chevron-circle-right mx-3 arrow" /> 
                                    Réaction en cas de signal d’alerte
                                    </p>
                                </div>
                                </div>
                            </div> {/* /panel 3 */}
                            </div> {/* end #accordion */}
                        </div> {/* End of .faq-panel */}
                        </div> {/* /.col- */}
                    </div> {/* /.row */}
                    </div> {/* /.container */}
                </div> {/* /.faq-page */}
                </div>

        </Fragment>
    )
}

export default Casces
