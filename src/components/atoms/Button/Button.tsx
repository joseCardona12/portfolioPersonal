import "./buttonStyles.css";
interface IButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
  backgroundColor?: string;
}
export default function Button({
  text,
  onClick,
  color,
  backgroundColor,
}: IButtonProps): React.ReactNode {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}
