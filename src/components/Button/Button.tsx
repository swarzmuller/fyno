import { IButton } from "./types";
import * as S from "./styles";

export const Button = ({ text, icon }: IButton) => {
  return (
    <button css={S.Button}>
      {icon ? <span>{icon}</span> : null}
      {text}
    </button>
  );
};
