import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 62px;
  background-color: #fff;
  align-items: center;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  border-radius: 10px;
`;

export const ButtonContainerDelete = styled.TouchableOpacity`
  width: 75px;
  height: 100%;
  background-color: red;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
