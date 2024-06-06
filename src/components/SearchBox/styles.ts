import { css } from "@emotion/react";

export const SearchBox = css`
  margin: 24px 0;

  h2 {
    font-family: SFProText Semibold, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
  }
`;

export const Search = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background: #f0f4fd;
  box-shadow: 0px 0px 0px 0.5px #ccd7f1;

  @media (max-width: 600px) {
    gap: 5px;
    flex-wrap: wrap;
    padding: 12px;
  }
`;

export const Input = css`
  position: relative;
  order: 1;
  width: 100%;

  &:first-of-type {
    order: -1;
  }

  &:last-of-type {
    max-width: 70px;

    @media (max-width: 600px) {
      max-width: 30%;
    }
  }

  &:nth-of-type(3) {
    @media (max-width: 600px) {
      max-width: 67%;
    }
  }

  input {
    height: 40px;
    font-size: 15px;
    line-height: 21px;
    padding: 10px 16px;
    border-radius: 8px;
    color: #3c3c43cc;
    border: none;
    box-shadow: 0px 0px 0px 0.5px #9797974d;
    width: 100%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    text-align: right;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    height: auto;
    width: auto;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }

  &.with-icon {
    input {
      padding-left: 44px;
    }
  }

  label {
    position: absolute;
    left: 12px;
    top: 12px;
  }
`;

export const Plane = css`
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;
