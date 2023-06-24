import "./App.css";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-DarkSlateGrey">
      <div className="w-[600px] grid grid-cols-2 bg-White p-4 rounded-3xl">
        <div className="flex flex-col gap-6 p-6">
          <div className="text-4xl font-bold">Stay updated!</div>
          <div className="text-sm">Join 60,000+ product manager receiving monthly updates on:</div>
          <ul>
            <li className="flex items-start text-sm">
              <span className="w-10 mr-2">
                <img alt="icon" src={iconList} />
              </span>
              Product discovery and building what matter
            </li>
            <li className="flex items-start text-sm">
              <span className="w-10 mr-2">
                <img alt="icon" src={iconList} />
              </span>
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start text-sm">
              <span className="w-10 mr-2">
                <img alt="icon" src={iconList} />
              </span>
              And much more!
            </li>
          </ul>
          <div>
            <div>
              <span>Email address</span>
              <span>Valid email required</span>
            </div>
            <input type="email" />
          </div>
          <div>
            <button>Subscribe to monthly newsletter </button>
          </div>
        </div>
        <div className="">
          <img src={desktopImage} alt="desktop" />
        </div>
      </div>
    </div>
  );
}

export default App;
