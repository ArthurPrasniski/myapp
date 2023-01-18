import { ButtonPrimary } from "../../components/button/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Container } from "./Styles";

export function Home() {
  return (
    <Container>
      <Title text="Bem-vindo(a)" />
      <ButtonPrimary
        onPress={() => console.log("pressed")}
        text="Criar um deck"
        margin="45px"
      />
      <Subtitle margin="51px" text="Meus decks" />
    </Container>
  );
}
