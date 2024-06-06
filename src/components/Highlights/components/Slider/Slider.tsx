import { useState } from "react";
import Carousel from "react-simply-carousel";
import Arrow from "@/assets/btnArrow.svg?react";
import { Highliht, PlaceToStay } from "../../types";
import { SliderItem } from "../SliderItem";
import * as S from "./styles";

export const Slider = ({ sights }: { sights: Highliht[] & PlaceToStay[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div css={S.Slider}>
      <Carousel
        containerProps={{
          className: "items-container",
        }}
        itemsListProps={{
          className: "items-list",
        }}
        infinite={false}
        centerMode={true}
        disableSwipeByMouse={true}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        swipeTreshold={60}
        itemsToShow={3}
        itemsToScroll={2}
        forwardBtnProps={{
          className: "slider-right-button",
          children: <Arrow />,
        }}
        backwardBtnProps={{
          className: "slider-left-button",
          children: <Arrow />,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            maxWidth: 600,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {sights.map((sightItem, index) => (
          <SliderItem key={index} sightItem={sightItem} />
        ))}
      </Carousel>
    </div>
  );
};
