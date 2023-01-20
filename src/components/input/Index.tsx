import { Container, Label, InputStyled } from "./Styles";

interface InputProps {
  text?: string;
  margin?: string;
  onChangeText?: (text: string) => void;
  placeholder:  string;
}

export function Input({ text, margin, onChangeText, placeholder }: InputProps, { ...rest }: any) {
  return (
    <Container margin={margin}>
      <Label>{text}</Label>
      <InputStyled {...rest} onChangeText={onChangeText} placeholder={placeholder}/>
    </Container>
  );
}
