import { SubtitleStyled } from "./Styles";

interface SubtitleProps {
  text: string;
  color?: string;
  margin?: string;
}

export function Subtitle(props: SubtitleProps) {
  return (
    <SubtitleStyled color={props.color} margin={props.margin}>
      {props.text}
    </SubtitleStyled>
  );
}
