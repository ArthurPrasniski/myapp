import styled from "styled-components/native";

export const ContainerMain = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: "rgba(0,0,0,0.5)";
`;

export const Container = styled.View`
  align-items: center;
  position: absolute;
  left: 32;
  right: 32;
  top: 250;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 32px;
`;
