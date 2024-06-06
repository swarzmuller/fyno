import { css } from "@emotion/react";

export const TitleBlock = css`
  display: flex;
  align-items: center;
  margin-left: -47px;

  @media (max-width: 600px) {
    margin-left: -30px;
  }
`;

export const Title = css`
  font-family: SFProText Semibold, sans-serif;
  line-height: 24px;
  font-weight: 600;
`;

export const CircleIcon = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #ffffff;

  @media (max-width: 600px) {
    margin-right: 5px;
  }

  span {
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;
