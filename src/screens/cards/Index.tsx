import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components/back-button/Index";
import { Input } from "../../components/input/Index";
import { Subtitle } from "../../components/subtitle/Index";
import { Title } from "../../components/title/Index";
import { Center, Container, ContainerStart } from "./Styles";
import { AntDesign } from "@expo/vector-icons";
import { ModalStyled } from "../../components/modal-card/Index";
import { useState } from "react";

export function Cards({ navigation }: any) {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  return (
    <SafeAreaView>
      <Container>
        <ContainerStart>
          <BackButton
            onPress={() => navigation.navigate("create_deck")}
            margin="32px 0px 32px 0px"
          />
          <Title text="Pesquise o seu card" />
          <Input text="" />
          <Subtitle text="Cards" margin="42px" />
        </ContainerStart>
        <Center>
          <AntDesign
            name="warning"
            size={120}
            color="yellow"
            onPress={onOpen}
          />
          <Subtitle text="Nenhum card encontrado" />
        </Center>
        <ModalStyled
          title="Nome da carta"
          modalVisible={open}
          onClose={() => setOpen(false)}
        />
      </Container>
    </SafeAreaView>
  );
}
