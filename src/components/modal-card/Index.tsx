import { Modal, View, Image } from "react-native";
import { Title } from "../title/Index";
import { Container, ContainerMain } from "./Styles";
import { AntDesign } from "@expo/vector-icons";
import { ButtonPrimary } from "../button/Index";

interface ModalProps {
  title: string;
  modalVisible: boolean;
  onClose: () => void;
  onPress: () => void;
  img: string;
}

export function ModalStyled(props: ModalProps) {
  return (
    <ContainerMain>
      <Modal
        visible={props.modalVisible}
        transparent={true}
        animationType="slide"
      >
        <Container>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginBottom: 32,
            }}
          >
            <AntDesign
              name="close"
              size={24}
              color="red"
              onPress={props.onClose}
            />
          </View>
          <View>
            <Title text={props.title} color="#000" />
          </View>
          <View>
            <Image
              style={{ width: 250, height: 350, marginTop: 20, marginBottom: 20 }}
              source={{ uri: props.img }}
            />
          </View>
          <ButtonPrimary text="Adicionar" onPress={props.onPress} />
        </Container>
      </Modal>
    </ContainerMain>
  );
}
