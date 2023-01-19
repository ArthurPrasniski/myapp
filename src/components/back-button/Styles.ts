import styled from "styled-components/native";

interface Props {
  margin?: string;
  color?: string;
}

export const Button = styled.TouchableOpacity`
  background-color: transparent;
  margin: ${(props: Props) => props.margin || "0px 0px 0px 0px"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: "Inter_700Bold";
`;
