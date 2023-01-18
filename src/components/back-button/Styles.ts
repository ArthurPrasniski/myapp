import styled from "styled-components/native";

interface Props {
  margin?: string;
  color?: string;
}

export const Button = styled.TouchableOpacity`
  background-color: transparent;
  padding: 16px;
  border-radius: 10px;
  margin-top: ${(props: Props) => props.margin || "0px"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 112px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: "Inter_700Bold";
`;
