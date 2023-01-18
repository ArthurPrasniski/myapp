import { TitleStyled } from "./Styles";
interface SubtitleProps {
  text: string;
  color?: string;
  margin?: string;
}

export function Title(props: SubtitleProps) {
  return (
    <TitleStyled color={props.color} margin={props.margin}>
      {props.text}
    </TitleStyled>
  );
}
