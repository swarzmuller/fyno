import { FormEvent } from "react";
import Plane from "@/assets/plane.svg?react";
import { Input } from "./components";
import { InputsArr } from "./helpers";
import * as S from "./styles";

export const SearchBox = () => {
  const hanlerSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div css={S.SearchBox}>
      <h2>Iceland itinerary</h2>
      <form css={S.Search} onSubmit={hanlerSubmit}>
        {InputsArr.map((input, index) => (
          <Input key={index} icon={input.icon} {...input} />
        ))}
        <Plane css={S.Plane} />
      </form>
    </div>
  );
};
