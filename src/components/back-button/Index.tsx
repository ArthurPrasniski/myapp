import { AntDesign } from "@expo/vector-icons";

import { Button, ButtonText } from "./Styles";

interface ButtonProps {
  onPress: () => void;
  margin?: string;
  color?: string;
}

export function BackButton(props: ButtonProps) {
  return (
    <Button margin={props.margin} color={props.color} onPress={props.onPress}>
      <AntDesign name="left" size={24} color="white" />
      <ButtonText>Voltar</ButtonText>
    </Button>
  );
}
