import { Button, ButtonText } from "./Styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
  margin?: string;
  color?: string;
  width?: string;
}

export function ButtonPrimary(props: ButtonProps) {
  return (
    <Button
      margin={props.margin}
      color={props.color}
      onPress={props.onPress}
      width={props.width}
    >
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
}
