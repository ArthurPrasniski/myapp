import { AntDesign } from "@expo/vector-icons";
import { Modal, View, Text } from "react-native";
import { ButtonPrimary } from "../button/Index";
import { Subtitle } from "../subtitle/Index";
import { Title } from "../title/Index";
import { ButtonContainer, Container, ContainerMain } from "./Styles";

interface ModalProps {
  title: string;
  subtitle: string;
  modalVisible: boolean;
  onClose: () => void;
}

export function ModalDelete(props: ModalProps) {
  return (
    <Modal
      visible={props.modalVisible}
      transparent={true}
      animationType="slide"
    >
      <ContainerMain>
        <Container>
          <Title text={props.title} color="#000" />
          <Subtitle text={props.subtitle} color="#000" align="center" />
          <ButtonContainer>
            <ButtonPrimary text="Deletar" onPress={() => {}} width="132px" />
            <ButtonPrimary
              text="Sair"
              onPress={props.onClose}
              color="#DC2626"
              width="132px"
            />
          </ButtonContainer>
        </Container>
      </ContainerMain>
    </Modal>
  );
}
