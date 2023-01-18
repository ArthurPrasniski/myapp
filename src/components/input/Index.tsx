import { Container, Label, InputStyled } from "./Styles";

interface InputProps {
  text: string;
  margin?: string;
}

export function Input({ text, margin }: InputProps, { ...rest }: any) {
  return (
    <Container margin={margin}>
      <Label>{text}</Label>
      <InputStyled {...rest} />
    </Container>
  );
}
