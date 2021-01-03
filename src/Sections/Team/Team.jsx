import './Team.css'
import '../../FontAwesome/font-awesome.css'
import TeamLeaderPic1 from '../../img/team-leader-pic1.jpg'
import TeamLeaderPic2 from '../../img/team-leader-pic2.jpg'
import TeamLeaderPic3 from '../../img/team-leader-pic3.jpg'

function Team() {
  return (
    <>
      <section class="main-section team" id="team">
        <div class="container">
          <h2>Amazing Team</h2>
          <h6>Take a closer look into our amazing team. We won’t bite.</h6>
          <div class="team-leader-block clearfix">
            <div class="team-leader-box">
              <div class="team-leader wow fadeInDown delay-03s">
                <div class="team-leader-shadow"><a href="javascript:void(0)"></a></div>
                <img src={TeamLeaderPic1} alt="" />
                <ul>
                  <li><a href="javascript:void(0)" class="fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa-google-plus"></a></li>
                </ul>
              </div>
              <h3 class="wow fadeInDown delay-03s">Walter White</h3>
              <span class="wow fadeInDown delay-03s">Chief Executive Officer</span>
              <p class="wow fadeInDown delay-03s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
            </div>
            <div class="team-leader-box">
              <div class="team-leader  wow fadeInDown delay-06s">
                <div class="team-leader-shadow"><a href="javascript:void(0)"></a></div>
                <img src={TeamLeaderPic2} alt="" />
                <ul>
                  <li><a href="javascript:void(0)" class="fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa-google-plus"></a></li>
                </ul>
              </div>
              <h3 class="wow fadeInDown delay-06s">Jesse Pinkman</h3>
              <span class="wow fadeInDown delay-06s">Product Manager</span>
              <p class="wow fadeInDown delay-06s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
            </div>
            <div class="team-leader-box">
              <div class="team-leader wow fadeInDown delay-09s">
                <div class="team-leader-shadow"><a href="javascript:void(0)"></a></div>
                <img src={TeamLeaderPic3} alt="" />
                <ul>
                  <li><a href="javascript:void(0)" class="fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa-google-plus"></a></li>
                </ul>
              </div>
              <h3 class="wow fadeInDown delay-09s">Skyler white</h3>
              <span class="wow fadeInDown delay-09s">Accountant</span>
              <p class="wow fadeInDown delay-09s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin cursus. Dolor sit amet, consectetur adipiscing elit proin consequat.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team