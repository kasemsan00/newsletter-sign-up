import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-DarkSlateGrey">
      <div className="text-4xl font-bold">Stay updated!</div>
      <div>Join 60,000+ product manager receiving monthly updates on:</div>
      <ul>
        <li>Product discovery and building what matter</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
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
  );
}

export default App;
