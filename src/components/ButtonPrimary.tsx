interface Props {
  text: string;
  onClick: () => void;
}
export default function ButtonPrimary({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-DarkSlateGrey font-bold text-White py-4 rounded-md w-full transition
              hover:bg-gradient-to-r
              hover:from-button1
              hover:to-button2
              hover:shadow-2xl
              hover:shadow-button1
              hover:transition
              "
    >
      {text}
    </button>
  );
}
