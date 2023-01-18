import styled from "styled-components/native";

interface Props {
  margin?: string;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  max-height: 54px;
  margin-top: ${(props: Props) => props.margin || "0px"};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
