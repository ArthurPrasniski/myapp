import { Container, Title } from "./Styles";
import { AntDesign } from '@expo/vector-icons';

interface DecksProps {
  text: string;
  onPress: () => void;
  margin?: string;
}

export function Decks(props: DecksProps) {
  return (
    <Container onPress={props.onPress} margin={props.margin}>
      <Title>{props.text}</Title>
      <AntDesign name="right" size={24} color="black" />
    </Container>
  );
}
