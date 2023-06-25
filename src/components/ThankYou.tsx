import ButtonPrimary from "./ButtonPrimary.tsx";
import Header from "./Header.tsx";
import IconSuccess from "../assets/images/icon-success.svg";

interface Props {
  emailSubscribe: string;
}
export default function ThankYou({ emailSubscribe }: Props) {
  return (
    <>
      <div className="flex flex-col w-[540px] gap-10 p-14 justify-center bg-White rounded-3xl">
        <img className="w-16" alt="icon success" src={IconSuccess} />
        <Header text={"Thanks for subscribing!"} />
        <span>
          A confirmation email has been send to <span className="font-bold">{emailSubscribe}</span>.
          Please open and click the button inside to confirm your subscription.
        </span>
        <ButtonPrimary text="Dismiss Message" onClick={() => null} />
      </div>
    </>
  );
}
