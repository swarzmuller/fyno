import { css } from "@emotion/react";

export const Header = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
  padding: 20px 0;
`;

export const ButtonGroup = css`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  button {
    &:first-of-type {
      border-radius: 16px 0 0 16px;
    }

    @media (max-width: 600px) {
      flex: 1;
    }
  }
`;

export const HeaderButton = css`
  font-family: SFProText Semibold, sans-serif;
  font-weight: 600;
  border: 0.5px solid #e5e5ea;
  font-size: 15px;
  line-height: 32px;
  padding: 0 12px;
  color: #000000;
`;

export const Dropdown = css`
  position: relative;

  button {
    &:first-of-type {
      border-radius: 0 16px 16px 0;
    }
  }
`;

export const Arrow = css`
  margin-left: 10px;
  transition: 0.3s;

  &.open {
    rotate: 180deg;
  }
`;

export const DropdownMenu = css`
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 1;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  border: 0.5px solid #e5e5ea;

  li {
    padding: 5px;
    cursor: pointer;
    font-size: 14px;

    &:not(:last-child) {
      border-bottom: 0.5px solid #e5e5ea;
    }
  }
`;

export const CreateButton = css`
  position: relative;
  border-radius: 16px;
  padding-left: 36px;
  transition: 300ms;

  &:hover {
    background: #000000;
    color: #ffffff;

    &::before,
    &::after {
      background: #ffffff;
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 9px;
    left: 20px;
    width: 2px;
    height: 13px;
    background: #000000;
    transition: 300ms;
    content: "";
  }

  &::after {
    rotate: 90deg;
    left: 20px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
