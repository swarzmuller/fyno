import { css } from "@emotion/react";

export const Highlights = css`
  padding: 16px 0;
`;

export const PlaceContainer = css`
  margin-bottom: 32px;
  padding-left: 48px;

  @media (max-width: 600px) {
    padding-left: 30px;
  }
`;

export const Block = css`
  position: relative;

  &:not(:last-child) {
    padding-bottom: 40px;

    &::before {
      position: absolute;
      left: -36px;
      top: 0;
      height: 100%;
      width: 2px;
      background: #3c3c432e;
      content: "";

      @media (max-width: 600px) {
        left: -18px;
      }
    }
  }
`;

export const Text = css`
  color: #3c3c43cc;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Region = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;
