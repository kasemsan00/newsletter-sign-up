import { useRef } from "react";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import ButtonPrimary from "./ButtonPrimary.tsx";
import Header from "./Header.tsx";

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

interface Props {
  onEmailChange: (arg0: string) => void;
  onSubmit: () => void;
}

export default function SubscribeForm({ onEmailChange, onSubmit }: Props) {
  const validEmailRef = useRef<HTMLSpanElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (inputEmailRef.current?.validity.valid) {
      validEmailRef.current?.classList.add("hidden");
      onSubmit();
    } else {
      validEmailRef.current?.classList.remove("hidden");
      inputEmailRef.current?.classList.remove("text-DarkSlateGrey");
      inputEmailRef.current?.classList.add("text-Tomato", "bg-red-100", "border-Tomato");
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 w-[900px] bg-White p-4 rounded-3xl">
        <div className="flex flex-col gap-10 p-6 justify-center">
          <Header text={"Stay updated!"} />
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
              onChange={(event) => {
                onEmailChange(event.target.value);
              }}
            />
          </div>
          <div>
            <ButtonPrimary text="Subscribe to monthly newsletter" onClick={handleSubmit} />
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src={desktopImage} alt="desktop" />
        </div>
      </div>
    </>
  );
}
