import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://scontent.fdac142-1.fna.fbcdn.net/v/t39.30808-6/484494701_2006691606480709_5577813586135103358_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHwo41noXBrqmQ0BhJQ6IXnasTrvlQ4pI5qxOu-VDikjuY5yMy-3dEok_tCm5UynMVxo0lmH8i7xiUYvrQqM3Hq&_nc_ohc=qCFYtiQkbfkQ7kNvwHY9zut&_nc_oc=Adm0789RJSEMGMTMXln_dXSlarSObcNWhe-UGD5zgTLcU0Hyp69F0h8rU3vrOWdV3DI&_nc_zt=23&_nc_ht=scontent.fdac142-1.fna&_nc_gid=Pf8ZMyudyXfd0Yb2vc5Ivw&oh=00_AfPH6sKP_L4_E9CWbIENaexvFoTCJYQObCTpFb41IHx6jQ&oe=686C7C81" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* <a href="https://codeforces.com/profile/m_ithunvoe" target="_blank" rel="noreferrer"> */}
              {/* <span style={{fontSize: '24px'}}>CF</span> */}
            {/* </a> */}
          </div>
          <h1>Kabya Mithun Saha</h1>
          <p>Frontend Researcher & Flutter Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mithunvoe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://codeforces.com/profile/m_ithunvoe" target="_blank" rel="noreferrer">
              <span style={{fontSize: '24px'}}>CF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;