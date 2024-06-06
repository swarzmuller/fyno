import { useEffect, useState } from "react";
import { getHighlights } from "@/api";
import { PlaceContainer } from "./components";
import { IHighlihts } from "./types";
import * as S from "./styles";

export const Highlights = () => {
  const [highlight, setHighlight] = useState<IHighlihts[]>();

  useEffect(() => {
    getHighlights().then((data) => {
      setHighlight(data);
    });
  }, []);

  if (!highlight) return <h4>Loading...</h4>;

  return (
    <div css={S.Highlights} id="highlights">
      {highlight.map((highlightItem, index) => (
        <PlaceContainer key={index} highlightItem={highlightItem} />
      ))}
    </div>
  );
};
