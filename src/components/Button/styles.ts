import { css } from "@emotion/react";

export const Button = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: SFProText Semibold, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 0.5px rgba(151, 151, 151, 0.3);
  transition: 300ms;

  span {
    display: flex;
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.03);
  }
`;
