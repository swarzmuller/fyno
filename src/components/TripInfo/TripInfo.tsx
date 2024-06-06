import * as S from "./styles";

export const TripInfo = () => {
  return (
    <div css={S.TripInfo}>
      <div css={S.TripInfoItem}>
        <p>Trip duration</p>
        <p>7 days</p>
      </div>
      <div css={S.TripInfoItem}>
        <p>Exploration</p>
        <p>4 regions</p>
      </div>
      <div css={S.TripInfoItem}>
        <p>Flight</p>
        <p>7h 20m from SFO</p>
      </div>
      <div css={S.AnchorLink}>
        <a href="#highlights">View itinerary</a>
      </div>
    </div>
  );
};
