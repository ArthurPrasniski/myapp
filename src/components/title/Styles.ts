import styled from "styled-components/native";

interface Props {
    margin?: number;
    color?: string;
}

export const Container = styled.View`
  margin-bottom: ${(props: Props) => props.margin || 0}px;
`;

export const TitleStyled = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props: Props) => props.color || "#FFFFFF"};
`;
