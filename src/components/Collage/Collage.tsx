import { useState } from "react";
import Grid from "@/assets/grid.svg?react";
import { collageArr } from "./helpers";
import * as S from "./styles";

export const Collage = () => {
  const [id, setId] = useState<number>(collageArr[0].id);

  return (
    <div css={S.Collage}>
      {collageArr.map((imageItem) => {
        return (
          <div
            onClick={() => setId(imageItem.id)}
            key={imageItem.id}
            className={imageItem.id === id ? "main" : ""}
            css={{ backgroundImage: `url(${imageItem.imgLink})` }}
          ></div>
        );
      })}
      <button css={S.AllPhotos}>
        <Grid /> All photos
      </button>
    </div>
  );
};
