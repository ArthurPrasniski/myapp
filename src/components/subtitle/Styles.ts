import styled from "styled-components/native";

interface Props {
  margin?: string;
  color?: string;
  align?: string;
}

export const SubtitleStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props: Props) => props.color || "#FFFFFF"};
  margin-top: ${(props: Props) => props.margin || "0px"};
  text-align: ${(props: Props) => props.align || "left"};
`;
