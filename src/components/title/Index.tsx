import { Container, TitleStyled } from "./Styles";
interface SubtitleProps {
  text: string;
  color?: string;
  margin?: number;
}

export function Title(props: SubtitleProps) {
  return (
    <Container margin={props.margin}>
      <TitleStyled color={props.color} >
        {props.text}
      </TitleStyled>
    </Container>
  );
}
