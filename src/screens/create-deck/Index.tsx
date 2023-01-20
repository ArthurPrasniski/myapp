import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { BackButton } from "../../components/back-button/Index";
import { ButtonPrimary } from "../../components/button/Index";
import { CardDeck } from "../../components/card-deck/Index";
import { Dropdown } from "../../components/dropdown/Index";
import { Input } from "../../components/input/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Container } from "./Styles";

interface CardsProps {
  name: string;
  image_uris?: any;
  id: string;
}

export function CreateDeck({ navigation }: any, cards: any) {
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

  const [cardsList, setCardsList] = useState<CardsProps[]>([]);

  const renderItems = (item: CardsProps) => {
    return (
      <View style={{ maxWidth: "100%" }}>
        <CardDeck name={item?.name} onPress={() => deleteItem(item?.id)} />
      </View>
    );
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setCardsList(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        const cards = JSON.parse(value);
        const newCards = cards.filter((item: CardsProps) => item.id !== id);
        setCardsList(newCards);
        await AsyncStorage.setItem("@storage_Key", JSON.stringify(newCards));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
      <FlatList data={cardsList} renderItem={({ item }) => renderItems(item)} />
      <ButtonPrimary
        onPress={() => navigation.navigate("home")}
        text="Salvar"
        margin="16px"
      />
    </Container>
  );
}
