import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/Home'
import Contact from '../components/Contact'
import BlogDetail from '../components/BlogDetail'
import Faq from '../components/Faq';
import Casces from '../components/Casces';



function Header() {

	

    return (
     <Router>
       
                {/* ===================================================
				Loading Transition
			==================================================== */}
                {/* Preloader */}
                <section>
                <div id="preloader">
                    <div id="ctn-preloader" className="ctn-preloader">
                    <div className="animation-preloader">
                        <div className="icon"><img src="images/1.svg" alt="" /></div>
                        <div className="txt-loading">
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="S" className="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="C" className="letters-loading">
                            C
                        </span>
                        </div>
                    </div>	
                    </div>
                </div>
                </section>

                {/* 
			=============================================
				Theme Main Menu
			============================================== 
			*/}
<div className="theme-main-menu theme-menu-one main-orange-color sticky-menu">
  <div className="d-flex align-items-center">
    <div className="logo mr-auto"><Link to="/"><img src="assets/images/logo-isc-formation.png" alt="" /></Link></div>
    <div className="right-content order-lg-3">
      <ul className="d-flex align-items-center">
        {/*	<li class="action-list-item cart-action-wrapper">
								<div class="dropdown">
									<button class="dropdown-toggle" data-toggle="dropdown">
									    <img src="images/icon/icon1.svg" alt="">
									    <span class="item-count">02</span>
									</button>
									<div class="dropdown-menu dropdown-menu-right">
										<ul class="cart-product-list">
											<li class="clearfix selected-item">
												<a href="#" class="item-img"><img src="images/shop/1.png" alt=""></a>
												<div class="item-info">
													<a href="#" class="name">Blue Fery.</a>
													<div class="price">$38.00 <span class="quantity">x 1</span></div>
													<a href="#" class="close"><i class="fa fa-window-close" aria-hidden="true"></i></a>
												</div> /.item-info */}
        {/* </li> */}
        {/* /.selected-item */}
        {/* <li class="clearfix selected-item">
												<a href="#" class="item-img"><img src="images/shop/2.png" alt=""></a>
												<div class="item-info">
													<a href="#" class="name">Vibrant Shoe.</a>
													<div class="price">$125.00 <span class="quantity">x 1</span></div>
													<a href="#" class="close"><i class="fa fa-window-close" aria-hidden="true"></i></a>
												</div> */}
        {/* /.item-info */}
        {/* </li>  */}
        {/* /.selected-item */}
        {/* </ul>  */}
        {/* /.cart-product-list */}
        {/* <div class="subtotal d-flex justify-content-between align-items-center">
											<div class="title">Subtotal</div>
											<div class="total-price">$163.00</div>
										</div>
										<ul class="button-group">
											<li><a href="cart.html" class="view-cart tran3s">View Cart</a></li>
											<li><a href="checkout.html" class="checkout tran3s">Checkout</a></li>
										</ul> */}
        {/* </div>  */}
        {/* /.dropdown-menu */}
        {/* </div> */}
        {/* </li>  */}
        {/* /.cart-action-wrapper */}
        <li className="action-list-item"><Link to="/contact" className="theme-btn line-button-one contact-button button-orange">Contact us</Link></li>
      </ul>
    </div> 
    <nav id="mega-menu-holder" className="navbar navbar-expand-lg order-lg-2">
      <div className="container nav-container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="flaticon-setup" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item  icon-menu">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item  icon-menu">
              <Link className="nav-link" to="/casces">Casces</Link>
            </li>
            <li className="nav-item  icon-menu">
              <Link className="nav-link" to="/blog-detail" >Blog Detail</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>  
  </div>
</div> {/* /.theme-main-menu */}


                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/faq" component={Faq}/>
                    <Route exact path="/casces" component={Casces}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/blog-detail" component={BlogDetail}/>

                    

                </Switch>
            
     </Router>
    )
}

export default Header
