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
          <p>nav</p>
        </nav>
      </div>
      <div className="arsha_contents"></div>
      <div className="arsha_footer"></div>
    </div>
  );
}

export default App;
