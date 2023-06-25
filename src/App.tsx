import "./App.css";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";
import { useRef } from "react";

const ItemList = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="inline-block w-8 self-start">
        <img alt="icon" src={iconList} />
      </span>
      <span className="inline-block w-full">{text}</span>
    </li>
  );
};

export default function App() {
  const validEmailRef = useRef<HTMLSpanElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (!inputEmailRef.current?.validity.valid) {
      validEmailRef.current?.classList.remove("hidden");
    } else {
      validEmailRef.current?.classList.add("hidden");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-DarkSlateGrey">
      <div className="w-fit grid grid-cols-2 bg-White p-4 rounded-3xl">
        <div className="flex flex-col gap-6 p-6 justify-center">
          <div className="text-6xl font-bold">Stay updated!</div>
          <div className="">Join 60,000+ product manager receiving monthly updates on:</div>
          <ul className="flex flex-col gap-2">
            <ItemList text={"Product discovery and building what matter"}></ItemList>
            <ItemList text={"Measuring to ensure updates are a success"}></ItemList>
            <ItemList text={"And much more!"} />
          </ul>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold text-DarkSlateGrey">Email address</span>
              <span className="hidden font-bold text-Tomato" ref={validEmailRef}>
                Valid email required
              </span>
            </div>
            <input
              className="border border-Grey rounded-md text-DarkSlateGrey p-4 w-full"
              placeholder="email@company.com"
              type="email"
              required
              ref={inputEmailRef}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-DarkSlateGrey font-bold text-White py-4 rounded-md w-full"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src={desktopImage} alt="desktop" />
        </div>
      </div>
    </div>
  );
}
