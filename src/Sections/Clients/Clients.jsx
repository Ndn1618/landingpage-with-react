import './Clients.css'
import QuoteSignLeft from '../../img/quote_sign_left.png'
import QuoteSignRight from '../../img/quote_sign_right.png'
import ClientPic1 from '../../img/client-pic1.jpg'
import ClientPic2 from '../../img/client-pic2.jpg'

function Clients() {
  return (
    <>
      <section className="main-section" id="client_outer">
        <h2>Happy Clients</h2>
        <div className="client_area ">
          <div className="client_section animated fadeInUp wow">
            <div className="client_profile">
              <div className="client_profile_pic">
                <img src={ClientPic1} alt="" />
              </div>
              <h3>Saul Goodman</h3>
              <span>Lawless Inc</span> </div>
            <div className="quote_section">
              <div className="quote_arrow"></div>
              <p><b><img src={QuoteSignLeft} alt="" /></b> Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src={QuoteSignRight} alt="" /></small> </p>
            </div>
            <div className="clear"></div>
          </div>
          <div className="client_section animated  fadeInDown wow">
            <div className="client_profile flt">
              <div className="client_profile_pic"><img src={ClientPic2} alt="" /></div>
              <h3>Marie Schrader</h3>
              <span>DEA Foundation</span> </div>
            <div className="quote_section flt">
              <div className="quote_arrow2"></div>
              <p><b><img src={QuoteSignLeft} alt="" /></b> Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src={QuoteSignRight} alt="" /></small> </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients