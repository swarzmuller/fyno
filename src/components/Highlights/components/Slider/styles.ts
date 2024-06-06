import { css } from "@emotion/react";

export const Slider = css`
  margin-top: 24px;
  overflow: hidden;

  .items-list {
    display: flex;
    gap: 15px;

    @media (max-width: 600px) {
      gap: 0;
    }
  }

  .items-container {
    position: relative;
  }

  .slider-right-button,
  .slider-left-button {
    position: absolute;
    top: 120px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: rgba(151, 151, 151, 0.3) 0px 0px 0px 0.5px;

    @media (max-width: 600px) {
      top: 88px;
    }

    &:disabled {
      display: none;
    }
  }

  .slider-right-button {
    right: 12px;
  }

  .slider-left-button {
    left: 12px;

    svg {
       rotate: 180deg;
    }
  }
`;
