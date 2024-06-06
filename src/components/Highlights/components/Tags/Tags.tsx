import * as S from "./styles";

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div css={S.Tags}>
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};
