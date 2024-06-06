import { ITitle } from "./types";
import * as S from "./styles";

export const Title = ({ text, icon, isSubtitle = false }: ITitle) => {
  const TitleTag = isSubtitle ? "h3" : "h2";
  const color = isSubtitle
    ? { background: "#9D9DA1" }
    : { background: "#714EFF" };
  const textSize = isSubtitle ? { fontSize: "17px" } : { fontSize: "20px" };

  return (
    <TitleTag css={S.TitleBlock}>
      <span css={[S.CircleIcon, color]}>{icon}</span>
      <span css={[S.Title, textSize]}>{text}</span>
    </TitleTag>
  );
};
