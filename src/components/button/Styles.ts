import styled from "styled-components/native";

interface Props {
  margin?: string;
  color?: string;
  width?: string;
  colorText?: string;
}

export const Button = styled.TouchableOpacity`
  background-color: ${(props: Props) => props.color || "#16a34a"};
  padding: 16px;
  border-radius: 10px;
  margin-top: ${(props: Props) => props.margin || "0px"};
  width: ${(props: Props) => props.width || "100%"};
`;

export const ButtonText = styled.Text`
  color: ${(props: Props) => props.colorText || "#fff"};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
