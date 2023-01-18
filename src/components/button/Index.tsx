import { Button, ButtonText } from "./Styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
  margin?: string;
  color?: string;
}

export function ButtonPrimary(props: ButtonProps) {
  return (
    <Button margin={props.margin} color={props.color}>
      <ButtonText onPres={props.onPress}>
        {props.text}
      </ButtonText>
    </Button>
  );
}
