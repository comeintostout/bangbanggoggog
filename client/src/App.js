import "./App.css";
import leftArrow from "./assets/leftArrow.svg";
import menuButton from "./assets/menuButton.svg";
import userButton from "./assets/userButton.svg";
import videoIcon from "./assets/video.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <div class="button-container container">
          <img src={leftArrow} alt="back" className="img-button"></img>
        </div>
        <p className="page-title">공간 업로드</p>
        <div class="button-container container">
          <img src={userButton} alt="myPage" className="img-button"></img>
          <img src={menuButton} alt="menu" className="img-button"></img>
        </div>
      </header>
      <body>
        <div className="input-component">
          <div className="input-title">
            <p>영상</p>
            <div className="vertical-line"></div>
          </div>
          <div className="video-box">
            <div>
              <img src={videoIcon} alt="비디오"></img>
              <p>영상 올리기</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
