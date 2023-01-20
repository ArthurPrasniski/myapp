import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components/back-button/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Center, Container, ContainerStart } from "./Styles";
import { AntDesign } from "@expo/vector-icons";
import { ModalStyled } from "../../components/modal-card/Index";
import React, { useState, useEffect } from "react";
import { searchCards } from "../../api/search-cards";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { Input } from "../../components/input/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardsProps {
  name: string;
  image_uris?: any;
  id: string;
}

export function Cards({ navigation }: any) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [deck, setDeck] = useState<CardsProps[]>([]);
  const [img, setImg] = useState("");
  const [cardName, setCardName] = useState("");
  const [id, setId] = useState("");
  const [manyCards, setManyCards] = useState<CardsProps[]>([]);

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem("@storage_Key", JSON.stringify(value));
      console.log("SALVO", value);
    } catch (e) {
      console.log(e);
    }
  }

  const storeManyCards = ({ name, image_uris, id }: CardsProps) => {
    const data = manyCards;
    data.push({ name, image_uris, id });
    setManyCards(data);
  };

  useEffect(() => {
    const search = async () => {
      const response = await searchCards(searchValue);
      setDeck(response?.data);
    };
    search();
  }, [searchValue]);

  const onOpen = (img: string, nameCard: string, id: string) => {
    setCardName(nameCard);
    setId(id);
    setImg(img);
    setOpen(true);
  };

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => onOpen(item?.image_uris?.normal, item?.name, item?.id)}
        style={{
          backgroundColor: "white",
          marginBottom: 12,
          padding: 12,
          borderRadius: 12,
        }}
      >
        <Text>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  // const storeData = async (value: any) => {
  //   try {
  //     await AsyncStorage.setItem("@storage_Key", JSON.stringify(value));
  //     console.log("salvo", value);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <SafeAreaView>
      <Container>
        <ContainerStart>
          <BackButton
            onPress={() => navigation.navigate("create_deck")}
            margin="32px 0px 32px 0px"
          />
          <Title text="Pesquise o seu card" />
          <Input onChangeText={handleSearch} placeholder="Pesquise aqui..." />
          <Subtitle text="Cards" margin="42px" />
        </ContainerStart>
        <Center>
          {deck.length > 0 ? (
            <FlatList
              data={deck}
              initialNumToRender={15}
              renderItem={renderItem}
            />
          ) : (
            <>
              <AntDesign name="warning" size={120} color="yellow" />
              <Subtitle text="Nenhum card listado" />
            </>
          )}
        </Center>
        <ModalStyled
          title={cardName}
          modalVisible={open}
          img={img}
          onClose={() => setOpen(false)}
          onPress={() => {
            storeManyCards({ name: cardName, image_uris: img, id: id });
            storeData(manyCards);
          }}
        />
      </Container>
    </SafeAreaView>
  );
}
