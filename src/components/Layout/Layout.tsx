import {
  Collage,
  Header,
  Highlights,
  PlaceDescription,
  SearchBox,
  TripInfo,
} from "@/components";
import { LayoutBase } from "./LayoutBase";

export const Layout = () => {
  return (
    <LayoutBase>
      <Header />
      <Collage />
      <TripInfo />
      <PlaceDescription />
      <SearchBox />
      <Highlights />
    </LayoutBase>
  );
};
