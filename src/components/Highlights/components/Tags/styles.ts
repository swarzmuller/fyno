import { css } from "@emotion/react";

export const Tags = css`
  margin-bottom: 16px;

  span {
    font-size: 15px;
    line-height: 21px;
    color: #3C3C4380;
    
    &:not(:last-child) {
        margin-right: 16px;
    }
  }
`;
