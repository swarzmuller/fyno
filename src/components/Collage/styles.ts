import { css } from "@emotion/react";

export const Collage = css`
  position: relative;
  display: grid;
  grid-template-columns: 347px 1fr 1fr;
  gap: 4px;
  min-height: 292px;
  overflow: hidden;
  border-radius: 24px;

  @media (max-width: 600px) {
    min-height: 500px;
    grid-template-columns: 1fr 1fr;
  }

  div {
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &.main {
      grid-row-start: 1;
      grid-row-end: 3;
      height: 100%;
      cursor: default;

      @media (max-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
`;

export const AllPhotos = css`
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 4px;
  background: rgba(136, 136, 136, 0.3);
  border-radius: 40px;
  color: #ffffff;
  font-family: SFProText Semibold, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  transition: 300ms;

  &:hover {
    background: #000000;
    box-shadow: 0px 0px 5px 1px #ffffff;
  }
`;
