import { IButton } from "./types";
import * as S from "./styles";

export const Button = ({ text, icon, onClick }: IButton) => {
  return (
    <button css={S.Button} onClick={onClick}>
      {icon ? <span>{icon}</span> : null}
      {text}
    </button>
  );
};
