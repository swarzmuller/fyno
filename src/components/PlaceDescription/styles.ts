import { css } from "@emotion/react";

export const PlaceDescription = css`
  margin: 28px 0;
  padding: 32px 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Title = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  h1 {
    font-family: SFProText Semibold, sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ButtonGroup = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Expert = css`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;

  p {
    display: flex;
    flex-direction: column;

    span {
      &:first-of-type {
        font-family: SFProText Semibold, sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      }

      &:last-of-type {
        font-size: 15px;
        line-height: 21px;
        color: rgba(60, 60, 67, 0.8);
      }
    }
  }
`;

export const Text = css`
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
