import * as S from "../../styles";
import { InputProps } from "../../types";

export const Input = ({icon, ...props }: InputProps) => {
  return (
    <div css={S.Input} className={icon ? 'with-icon' : ''}>
      {icon ? <label htmlFor={props.id}>{icon}</label> : null}
      <input {...props} />
    </div>
  );
};
