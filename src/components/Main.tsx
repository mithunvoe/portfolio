import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/494446344_2046011659215370_185682841636141736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeETO8_88tYRdQ__xygOy908ptVjuT2Q3uym1WO5PZDe7F8ErGSKxRGn2gyy2m27e5Xnti_2UCNGUrdGuNFj5-02&_nc_ohc=KWASuktymQoQ7kNvwHe_3N3&_nc_oc=AdmDswGbUkKSAoM9R02uI3S5siASGcTlkFH03_ImYzuDXU72R0_DpkFeMQMqqVcZmuw&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=Nuo4XV3Lw8vZANM2www2AA&oh=00_AfX0aRpVZZFWioiHMDbpk2pDzYIIYjb0irtoxdfn8LKxyg&oe=68A3DEE6" alt="Avatar" />
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