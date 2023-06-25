interface Props {
  text: string;
}
export default function Header({ text }: Props) {
  return <div className="text-6xl font-bold">{text}</div>;
}
