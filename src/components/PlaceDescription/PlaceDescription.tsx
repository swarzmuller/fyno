import { Button } from "@/components";
import Label from "@/assets/label.svg?react";
import Share from "@/assets/share.svg?react";
import Ava from "@/assets/images/ava.png";
import * as S from "./styles";

export const PlaceDescription = () => {
  return (
    <div css={S.PlaceDescription}>
      <div css={S.Title}>
        <h1>Iceland’s Highlights</h1>
        <div css={S.ButtonGroup}>
          <Button text="Add to wishlist" icon={<Label />} />
          <Button text="Share" icon={<Share />} />
        </div>
      </div>
      <div css={S.Expert}>
        <img src={Ava} alt="Avatar" />
        <p>
          <span>Curated by Sandra</span>
          <span>Fyno expert</span>
        </p>
      </div>
      <p css={S.Text}>
        Welcome to Iceland, a land of breathtaking landscapes and unspoiled
        natural beauty. From its majestic waterfalls and geothermal wonders to
        the vibrant culture and rich history, Iceland promises an unforgettable
        adventure for every traveler.
      </p>
    </div>
  );
};
