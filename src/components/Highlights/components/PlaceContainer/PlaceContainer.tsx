import { Button, Slider, Tags, Title } from "@/components";
import Highlight from "@/assets/highlighte.svg?react";
import Plan from "@/assets/plan.svg?react";
import Bed from "@/assets/bed.svg?react";
import { IHighlihts } from "../../types";
import * as S from "../../styles";

export const PlaceContainer = ({
  highlightItem,
}: {
  highlightItem: IHighlihts;
}) => {

  return (
    <div css={S.PlaceContainer}>
      <div css={S.Block}>
        <Title
          text={highlightItem.title}
          icon={<span>{highlightItem.order}</span>}
        />
        <Tags tags={highlightItem.tags} />
        <p css={S.Text}>{highlightItem.description}</p>
      </div>
      <div css={S.Block}>
        <div css={S.Region}>
          <Title
            text={highlightItem.highlihtsTitle}
            icon={<Highlight />}
            isSubtitle
          />
          <Button
            text="Show daily plan"
            icon={<Plan />}
            onClick={() => console.log(highlightItem)}
          />
        </div>
        <Slider sights={highlightItem.highlihts}/>
      </div>
      <div css={S.Block}>
        <Title
          text={highlightItem.placeToStayTitle}
          icon={<Bed />}
          isSubtitle
        />
        <Slider sights={highlightItem.placeToStay}/>
      </div>
    </div>
  );
};
