import React, {useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function BlogDetail() {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <div>
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
                <h2 className="pt-30 pb-15">TAXI MOTO</h2>
                {/* <p class="sub-heading">Envoyez nous votre demande</p> */}
                </div>
            </div> {/* /.text-inner-banner-one */}
            {/* 
                        =============================================
                            Blog Details
                        ============================================== 
                        */}
            <div className="our-blog blog-details py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                    <section className="py-3">
                        <h5 className="pb-3 pt-4">Passage de l'examen chauffeur TAXI MOTO à rungis</h5>
                        <p className="text-muted py-2">Ce secteur recrute régulièrement dans toute la France. Vous pourrez fidéliser une clientèle de particuliers, professionnels(Corporate), et touristes. Notre partenaire MOTOCAB, vous permettra de pouvoir commencer cette activité en toute simplicité, avec une clientèle disponible et immédiate.</p>
                        <p className="text-muted pb-2">L’examen TAXI MOTO a évolué. 5 épreuves théoriques écrites sont communes aux candidats à chacun des deux examens. Il s'agit des modules théoriques suivants :</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-a text-white">A</span>Réglementation du transport public particulier de personnes.</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-b text-white">B</span>Gestion.</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-c text-white">C</span>Sécurité routière.</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-d text-white">D</span>Capacité d’expression et de compréhension en langue française</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-e text-white">E</span>Capacité d’expression et de compréhension en langue anglaise</p>
                        <p className="py-1 text-muted">Deux modules viennent s'ajouter au tronc commun à s'avoir:</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-f text-white">F</span>Sécurité routière spécifique à l'usage et à la conduite de motocyclettes et de réglementation d'exploitation spécifique de l'activité de transport par véhicule VMDTR</p>
                        <p className="py-1 font-weight-bold"><span className="px-3  mr-3 taxi-moto-g text-white">G</span>Prise en charge du passager et développement commercial</p>
                        <p className="py-1 taxi-sec-text">Le seuil d’admissibilité dans cette examen à été fixé à 10 / 20 (sans note éliminatoire dans l'un des précédants modules)</p>
                        <p className="py-1 taxi-sec-text">Le seuil d’admissibilité dans cette examen à été fixé à 10 / 20 (sans note éliminatoire dans l'un des précédants modules)</p>
                    </section>
                    <section className="py-3">
                        <h5 className="pb-3 pt-4">Conditions d’inscription</h5>
                        <div className="row">
                        <div className="col-md-3">
                            <p className="large-text py-3">Permis</p>
                            <p className="py-1 small-text text-muted">Être titulaire du Permis A de plus de 3 ans et non probatoire.</p>
                        </div>
                        <div className="col-md-3">
                            <p className="large-text py-3">Attestation médicale</p>
                            <p className="py-1 small-text text-muted">Être déclaré apte par un médecin agrée par la préfecture de votre département de domiciliation</p>
                        </div>
                        <div className="col-md-3">
                            <p className="large-text py-3">Bulletin numéro 2</p>
                            <p className="py-1 small-text text-muted">Avoir un bulletin numéro 2 de casier judiciaire vierge</p>
                        </div>
                        <div className="col-md-3">
                            <p className="large-text py-3">Entretien préalable</p>
                            <p className="py-1 small-text text-muted">Passer avec succès un entretien préalable avec le responsable pédagogique.
                            </p>
                        </div>
                        </div>
                    </section>
                    <section className="py-3">
                        <h5 className="pb-3 pt-4">Les pièces à fournir</h5>
                        <div className="row">
                        <div className="col-md-4">
                            <p className="large-text py-3">Pièce d'identité</p>
                            <p className="py-1 small-text text-muted">Une photocopie de la carte nationale d'identité ou du passeport en cours de validité. Pour les étrangers, une autorisation de travail.</p>
                        </div>
                        <div className="col-md-4">
                            <p className="large-text py-3">Permis de conduire</p>
                            <p className="py-1 small-text text-muted">Une photocopie du permis de conduire de catégorie A en cours de validité et hors période probatoire.</p>
                        </div>
                        <div className="col-md-4">
                            <p className="large-text py-3">Justificatif de domicile</p>
                            <p className="py-1 small-text text-muted">Quittance de loyer (facture EDF ou facture téléphone fixe) datant de moins de 3 mois.</p>
                        </div>
                        </div>
                        <div className="row py-3">
                        <div className="col-md-6">
                            <p className="large-text py-3">Une Photo d'identité</p>
                            <p className="py-1 small-text text-muted">Une Photo d'identité récente</p>
                        </div>
                        <div className="col-md-6">
                            <p className="large-text py-3">Paiement de 204 euros par Carte</p>
                            <p className="py-1 small-text text-muted">Frais d'inscriptions pour le passage de l'examen à chambres Régionale de Métiers et de l'Artisanat.</p>
                        </div>
                        </div>
                    </section>
                    <section className="py-3">
                        <h5 className="pb-4 pt-4">Les épreuves théoriques écrites de l'examen chauffeur TAXI MOTO</h5>
                        <img src="images/taxi-moto-sec/examen-taxi-moto.png" alt="" />
                    </section>
                    <section className="py-3">
                        <h5 className="pb-4 pt-4">Les épreuves pratiques de l'examen chauffeur TAXI MOTO</h5>
                        <img src="images/taxi-moto-sec/examen-pratique-taxi.png" alt="" />
                    </section>
                    <section>
                        <a href="ressources/progamme_formation_vmdtr.pdf" target="_blank" className="d-block large-text font-weight-bold py-2">Programme <i className="far fa-file-pdf ml-3 text-danger" /></a>
                        <a href="ressources/statistiques_mvtdr2020.pdf" target="_blank" className="d-block large-text font-weight-bold py-2">Statistiques 2020 <i className="far fa-file-pdf ml-3 text-danger" /></a>
                    </section>
                    </div>
                </div> {/* /.row */}
                </div> {/* /.container */}
            </div> {/* /.our-blog */}
            </div>

        </div>
    )
}

export default BlogDetail
