import styled from "styled-components/native";

interface Props {
  margin?: string;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${(props: Props) => props.margin || "0px"};
`;

export const InputStyled = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 50px;
  padding-left: 16px;
  border-radius: 10px;
  color: #000;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 8px;
  font-family: "Inter_700Bold";
`;
