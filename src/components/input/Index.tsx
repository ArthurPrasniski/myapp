import { Container, InputStyled } from "./Styles";

interface InputProps {
  placeholder: string;
  value: string;
}

export function Input(...rest: any) {
  return (
    <>
      <InputStyled {...rest} />
    </>
  );
}
