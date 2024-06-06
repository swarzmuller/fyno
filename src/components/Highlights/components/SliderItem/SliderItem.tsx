import Favorite from "@/assets/favorite.svg?react";
import Rating from "@/assets/ratingYellow.svg?react";
import { Highliht, PlaceToStay } from "../../types";
import * as S from "./styles";

export const SliderItem = ({
  sightItem,
}: {
  sightItem: Highliht & PlaceToStay;
}) => {
  return (
    <div css={S.SliderItem}>
      <div css={[S.Image, { backgroundImage: `url(${sightItem.image})` }]}>
        <div css={S.ImageTags}>
          {sightItem.tag ? <div css={S.Label}>{sightItem.tag}</div> : null}
          <button css={{ marginLeft: "auto" }}>
            <Favorite />
          </button>
        </div>
      </div>
      <div css={S.SliderDescription}>
        <p css={S.SliderTitle}>{sightItem.title}</p>
        {sightItem.rating ? (
          <div css={S.Rating}>
            <Rating />
            {sightItem.rating}/10
          </div>
        ) : null}
        <p css={S.SliderSubTitle}>{sightItem.subtitle}</p>
      </div>
    </div>
  );
};
