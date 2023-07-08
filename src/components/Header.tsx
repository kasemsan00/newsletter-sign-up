interface Props {
  text: string;
}
export default function Header({ text }: Props) {
  return <div className="text-4xl md:text-6xl font-bold">{text}</div>;
}
