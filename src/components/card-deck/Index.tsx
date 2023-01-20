import { ButtonContainerDelete, Container } from "./Styles";
import { AntDesign } from "@expo/vector-icons";
import { Subtitle } from "../subtitle/Index";

interface CardDeckProps {
  name: string;
  onPress: () => void;
}

export function CardDeck(props: CardDeckProps) {
  return (
    <Container>
      <Subtitle text={props.name} color="#000" />
      <ButtonContainerDelete onPress={props.onPress}>
        <AntDesign name="delete" size={24} color="white" />
      </ButtonContainerDelete>
    </Container>
  );
}
