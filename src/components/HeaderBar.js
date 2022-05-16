import React from 'react'

function HeaderBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-secondary" href="#page-top">Soggy Doggy Mobile</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link text-secondary" href="/services">Carpet Cleaning</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="/coupons">Coupons</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="/services/other">Other Services</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="/FAQs">FAQs</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="https://booking.moego.pet/go/?name=SoggyDoggy" target="_blank" rel='noreferrer'>Book Online</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default HeaderBar