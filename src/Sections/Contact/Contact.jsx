import './Contact.css'

import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <footer className="footer_section" id="contact">
        <div className="container">
          <section className="main-section contact" id="contact">
            <div className="contact_section">
              <h2>Contact Us</h2>
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon rollIn animated wow"><span><i className="fa-home"></i></span></div>
                    <span> 308 Negra Arroyo Lane, <br />
              Albuquerque, NM, 87104 </span> </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon icon2 rollIn animated wow"><span><i className="fa-phone"></i></span></div>
                    <span> 1-800-BOO-YAHH </span> </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon icon3 rollIn animated wow"><span><i className="fa-pencil"></i></span></div>
                    <span> <Link to="mailto:hello@butterfly.com"> hello@butterfly.com</Link> </span> </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft">
                <div className="contact-info-box address clearfix">
                  <h3>Don’t be shy. Say hello!</h3>
                  <p>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                  <p>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquampor id.</p>
                </div>
                <ul className="social-link">
                  <li className="twitter animated bounceIn wow delay-02s"><Link to="#"><i className="fa-twitter"></i></Link></li>
                  <li className="facebook animated bounceIn wow delay-03s"><Link to="#"><i className="fa-facebook"></i></Link></li>
                  <li className="pinterest animated bounceIn wow delay-04s"><Link to="#"><i className="fa-pinterest"></i></Link></li>
                  <li className="gplus animated bounceIn wow delay-05s"><Link to="#"><i className="fa-google-plus"></i></Link></li>
                  <li className="dribbble animated bounceIn wow delay-06s"><Link to="#"><i className="fa-dribbble"></i></Link></li>
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s">
                <div className="form">
                  <input className="input-text animated wow flipInY delay-02s" type="text" name="" placeholder="Your Name *" />
                  <input className="input-text animated wow flipInY delay-04s" type="text" name="" placeholder="Your E-mail *" />
                  <textarea className="input-text text-area animated wow flipInY delay-06s" cols="0" rows="0" placeholder="Your Message*" ></textarea>
                  <input className="input-btn animated wow flipInY delay-08s" type="submit" value="send message" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <div className="footer_bottom"> <span>Copyright © 2015 | <Link to="http://bootstraptaste.com/">Bootstrap Themes</Link> by BootstrapTaste </span> </div>
        </div>
      </footer>
    </>
  )
}

export default Contact