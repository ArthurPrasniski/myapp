import { useState } from "react";
import { FlatList, View } from "react-native";
import { BackButton } from "../../components/back-button/Index";
import { ButtonPrimary } from "../../components/button/Index";
import { Dropdown } from "../../components/dropdown/Index";
import { Input } from "../../components/input/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Container } from "./Styles";

export function CreateDeck({ navigation }: any) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Amarelo", value: "yellow" },
    { label: "Verde", value: "green" },
    { label: "Azul", value: "blue" },
    { label: "Vermelho", value: "red" },
    { label: "Cinza", value: "grey" },
  ]);

  const cards = [
    { id: 1, name: "Carta 1" },
    { id: 2, name: "Carta 2" },
    { id: 3, name: "Carta 3" },
    { id: 4, name: "Carta 4" },
    { id: 5, name: "Carta 5" },
    { id: 6, name: "Carta 6" },
  ];

  const renderItems = ({ item }: any) => {
    return (
      <View>
        <Title text={item.name} />
      </View>
    );
  };

  return (
    <Container>
      <BackButton
        onPress={() => navigation.navigate("home")}
        margin="32px 0px 32px 0px"
      />
      <View style={{ marginBottom: 32 }}>
        <Title text="Novo deck" />
      </View>
      <View style={{ marginBottom: 12, width: "100%" }}>
        <Input
          text="Nome do deck"
          placeholder="Nome do deck"
          onChangeText={(text: string) => setName(text)}
          value={name}
          haveIconSearch
        />
      </View>
      <Dropdown
        text="Selecione uma cor"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <ButtonPrimary
        onPress={() => navigation.navigate("cards")}
        text="Adicionar carta"
        margin="45px"
      />
      <Subtitle text="carta(s) adicionada(s)" margin="32px" />
      <FlatList data={cards} renderItem={renderItems} />
      <ButtonPrimary
        onPress={() => navigation.navigate("home")}
        text="Salvar"
        margin="16px"
      />
    </Container>
  );
}
