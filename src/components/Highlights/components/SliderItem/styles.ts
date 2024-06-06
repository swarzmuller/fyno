import { css } from "@emotion/react";

export const SliderItem = css`
  width: 217px;

  @media (max-width: 600px) {
    width: 160px;
    padding: 0 5px;
  }
`;

export const Image = css`
  height: 292px;
  overflow: hidden;
  border-radius: 16px;
  padding: 16px 24px 16px 16px;
  background-size: cover;

  @media (max-width: 600px) {
    height: 215px;
    padding: 8px 16px;
  }
`;

export const ImageTags = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
`;

export const Label = css`
  font-family: SFProText Medium, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #3c3c43cc;
  background: #ffffff80;
  padding: 7px 12px;
  border-radius: 8px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 7px;
  }
`;

export const SliderDescription = css`
  padding: 8px;
`;

export const SliderTitle = css`
  font-family: SFProText Semibold, sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SliderSubTitle = css`
  font-size: 15px;
  line-height: 21px;
  margin-top: 4px;
  color: #3c3c43cc;

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Rating = css`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: SFProText Semibold, sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
`;
