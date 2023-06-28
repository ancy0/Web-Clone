import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="arsha_top">
        <header className="arsha_header">
          <div className="arsha_h_left">
            <img
              className="arsha_logo_img"
              src={process.env.PUBLIC_URL + `/images/logo.png`}
              alt="logo"
            />
            <img
              className="arsha_desktop_img"
              src={process.env.PUBLIC_URL + `/images/desktop.png`}
              alt="desktop"
            />
            <img
              className="arsha_tablet_img"
              src={process.env.PUBLIC_URL + `/images/tablet.png`}
              alt="tablet"
            />
            <img
              className="arsha_phone_img"
              src={process.env.PUBLIC_URL + `/images/phone.png`}
              alt="phone"
            />
          </div>
          <div className="arsha_h_center">
            <p className="arsha_center_text">Arsha</p>
          </div>
          <div className="arsha_h_right">
            <img
              className="arsha_share_img"
              src={process.env.PUBLIC_URL + `/images/share.png`}
              alt="share"
            />
            <a className="arsha_header_download_btn" href="#download">
              <img
                className="arsha_download_img"
                src={process.env.PUBLIC_URL + `/images/h-download.png`}
                alt="download"
              />
              Free Download
            </a>
          </div>
        </header>
        <nav className="arsha_nav">
          <div className="arsha_nav_detail">
            <div className="arsha_n_left">
              <p className="arsha_n_title">arsha</p>
            </div>
            <div className="arsha_n_right">
              <a className="arsha_n_start_btn" href="#start">
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="arsha_contents"></div>
      <div className="arsha_footer">
        <div className="arsha_f_newsletter">
          <div className="arsha_f_newsletter_contents">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
          </div>
        </div>
        <div className="arsha_f_top">
          <div className="arsha_f_top_contents">
            <div className="arsha_f_top_info"></div>
            <div className="arsha_f_top_link"></div>
            <div className="arsha_f_top_services"></div>
            <div className="arsha_f_top_sns"></div>
          </div>
        </div>
        <div className="arsha_f_bottom"></div>
      </div>
    </div>
  );
}

export default App;
