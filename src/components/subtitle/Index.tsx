import { SubtitleStyled } from "./Styles";

interface SubtitleProps {
  text: string;
  color?: string;
  margin?: string;
  align?: string;
}

export function Subtitle(props: SubtitleProps) {
  return (
    <SubtitleStyled color={props.color} margin={props.margin} align={props.align}>
      {props.text}
    </SubtitleStyled>
  );
}
