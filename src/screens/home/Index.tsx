import { useState } from "react";
import { FlatList } from "react-native";
import { ButtonPrimary } from "../../components/button/Index";
import { Decks } from "../../components/decks/Index";
import { ModalDelete } from "../../components/modal-delete/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Container } from "./Styles";

export function Home({ navigation }: any) {
  const decks = [
    { name: "Deck 1", cards: 2 },
    { name: "Deck 2", cards: 2 },
    { name: "Deck 3", cards: 2 },
    { name: "Deck 4", cards: 2 },
    { name: "Deck 5", cards: 2 },
    { name: "Deck 6", cards: 2 },
    { name: "Deck 7", cards: 2 },
    { name: "Deck 8", cards: 2 },
    { name: "Deck 9", cards: 2 },
    { name: "Deck 10", cards: 2 },
  ];
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const rendeItem = ({ item }: any) => {
    return <Decks text={item.name} onPress={onOpen} margin="12px" />;
  };

  return (
    <Container>
      <Title text="Bem-vindo(a)" />
      <ButtonPrimary
        onPress={() => navigation.navigate("create_deck")}
        text="Criar um deck"
        margin="45px"
      />
      <Subtitle margin="51px" text="Meus decks" />
      <FlatList data={decks} renderItem={rendeItem} />
      <ModalDelete
        modalVisible={open}
        title="Aviso!"
        subtitle="Tem certza que deseja deletar esse card?"
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}
