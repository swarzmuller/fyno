import { css } from "@emotion/react";

export const TripInfo = css`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  gap: 64px;
  margin: 28px 0;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 0px 0.5px rgba(151, 151, 151, 0.3);

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, auto);
    gap: 10px;
    padding: 10px;
  }
`;

export const TripInfoItem = css`
  p {
    &:first-of-type {
      font-size: 15px;
      line-height: 21px;
      color: rgba(60, 60, 67, 0.8);

      @media (max-width: 600px) {
        font-size: 12px;
        line-height: 14px;
      }
    }

    &:last-of-type {
      font-size: 16px;
      line-height: 24px;
      font-family: SFProText Semibold, sans-serif;
      font-weight: 600;

      @media (max-width: 600px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const AnchorLink = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #714eff;
    font-family: SFProText Semibold, sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 32px;
    text-decoration: none;
    transition: 300ms;

    &:hover {
      color: #8672d6;
    }
  }

  @media (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    justify-content: center;
  }
`;
