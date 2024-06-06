import { Dropdown } from "./components/Dropdown";
import * as S from "./styles";

export const Header = () => {
  return (
    <div css={S.Header}>
      <div css={S.ButtonGroup}>
        <button css={S.HeaderButton}>Trips</button>
        <button css={S.HeaderButton}>Iceland</button>
        <Dropdown />
      </div>
      <button css={[S.HeaderButton, S.CreateButton]}>Create</button>
    </div>
  );
};
