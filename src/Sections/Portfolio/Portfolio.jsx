import './Portfolio.css'
import { Link } from 'react-router-dom'
import PortfolioPic1 from '../../img/portfolio_pic1.jpg'
import PortfolioPic2 from '../../img/portfolio_pic2.jpg'
import PortfolioPic3 from '../../img/portfolio_pic3.jpg'
import PortfolioPic4 from '../../img/portfolio_pic4.jpg'
import PortfolioPic5 from '../../img/portfolio_pic5.jpg'
import PortfolioPic6 from '../../img/portfolio_pic5.jpg'
import PortfolioPic7 from '../../img/portfolio_pic7.jpg'
import PortfolioPic8 from '../../img/portfolio_pic8.jpg'

function Portfolio() {
  return (
    <>
      <section id="Portfolio" className="content">

        <div className="container portfolio-title">

          <div className="section-title">
            <h2>Portfolio</h2>
          </div>

        </div>

        <div className="portfolio-top"></div>

        <div className="portfolio">

          <div id="filters" className="sixteen columns portfolioContainer">
            <ul className="clearfix Portfolio-nav">
              <li><Link className="portfolio-link active" id="all" to="#" data-filter="*">
                <h5>All</h5>
              </Link></li>
              <li><Link className="portfolio-link" to="#" data-filter=".branding">
                <h5>Branding</h5>
              </Link></li>
              <li><Link className="portfolio-link" to="#" data-filter=".design">
                <h5>Design</h5>
              </Link></li>
              <li><Link className="portfolio-link" to="#" data-filter=".photography">
                <h5>Photography</h5>
              </Link></li>
              <li><Link className="portfolio-link" to="#" data-filter=".videography">
                <h5>Videography</h5>
              </Link></li>
              <li><Link className="portfolio-link" to="#" data-filter=".web">
                <h5>Web</h5>
              </Link></li>
            </ul>
          </div>

          <div className="isotope" style={{ position: 'relative', overflow: 'hidden', height: 480, }} id="portfolio-wrap">

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four   videography isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic1} alt="Portfolio 1" />
              </div>
              <Link className="portfolio-link" title="Starbucks Coffee" rel="prettyPhoto[galname]" to="http://clapat.ro/themes/newave/images/portfolio/portfolio2.jpg">
                <div className="project-overlay">
                  <div className="project-info">
                    <div className="zoom-icon"></div>
                    <h4 className="project-name">Leica Camera</h4>
                    <p className="project-categories">Videography</p>
                  </div>
                </div>
              </Link> </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(337, 0, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  design isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic2} alt="Portfolio 1" />
              </div>
              <div className="project-overlay">
                <div className="open-project-link"> <Link className="open-project portfolio-link" to="http://clapat.ro/themes/newave/project-video-expander.html" title="Open Project"></Link> </div>
                <div className="project-info">
                  <div className="zoom-icon"></div>
                  <h4 className="project-name">Foto Template</h4>
                  <p className="project-categories">Design</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(674, 0, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  design  isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic3} alt="Portfolio 1" />
              </div>
              <div className="project-overlay">
                <div className="open-project-link"> <Link className="open-project portfolio-link" to="http://clapat.ro/themes/newave/project-normal-expander-1.html" title="Open Project"></Link> </div>
                <div className="project-info">
                  <div className="zoom-icon"></div>
                  <h4 className="project-name">Sony Phone</h4>
                  <p className="project-categories">Design</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(1011, 0, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  photography  branding web isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic4} alt="Portfolio 1" />
              </div>
              <div className="project-overlay">
                <div className="open-project-link"> <Link className="open-project portfolio-link" to="http://clapat.ro/themes/newave/project-fullscreen-expander-1.html" title="Open Project"></Link> </div>
                <div className="project-info">
                  <div className="zoom-icon"></div>
                  <h4 className="project-name">Nike Shoes</h4>
                  <p className="project-categories">Photography, Web, Branding</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(0, 240, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  design isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic5} alt="Portfolio 1" />
              </div>
              <div className="project-overlay">
                <div className="open-project-link"> <Link className="open-project portfolio-link" to="http://clapat.ro/themes/newave/project-fullscreen-expander-2.html" title="Open Project"></Link> </div>
                <div className="project-info">
                  <div className="zoom-icon"></div>
                  <h4 className="project-name">Vinyl Record</h4>
                  <p className="project-categories">Design</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(337, 240, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  web isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic6} alt="Portfolio 1" />
              </div>
              <div className="project-overlay">
                <div className="open-project-link"> <Link className="open-project portfolio-link" to="http://clapat.ro/themes/newave/project-normal-expander-2.html" title="Open Project"></Link> </div>
                <div className="project-info">
                  <div className="zoom-icon"></div>
                  <h4 className="project-name">iPhone</h4>
                  <p className="project-categories">Web</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(674, 240, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four  design web isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic7} alt="Portfolio 1" />
              </div>
              <Link to="http://clapat.ro/themes/newave/project-external-1.html" className="external">
                <div className="project-overlay">
                  <div className="project-info">
                    <div className="zoom-icon"></div>
                    <h4 className="project-name">Nexus Phone</h4>
                    <p className="project-categories">Design, Web</p>
                  </div>
                </div>
              </Link> </div>

            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate3d(1011, 240, 0) scale3d(1, 1, 1)', width: 337, opacity: 1, }} className="Portfolio-box portfolio-item one-four   photography isotope-item">
              <div className="portfolio-image">
                <img src={PortfolioPic8} alt="Portfolio 1" />
              </div>
              <Link title="Stereo Headphones" rel="prettyPhoto[galname]" to="http://clapat.ro/themes/newave/images/portfolio/portfolio8.jpg">
                <div className="project-overlay">
                  <div className="project-info">
                    <div className="zoom-icon"></div>
                    <h4 className="project-name">Art Frame</h4>
                    <p className="project-categories">Photography</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>

        </div>

        <div className="portfolio-bottom"></div>

        <div id="project-page-holder">
          <div className="clear"></div>
          <div id="project-page-data"></div>
        </div>

      </section>
    </>
  )
}

export default Portfolio