import styled from "styled-components/native";

interface Props {
  margin?: string;
}

export const SubtitleStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  margin-top: ${(props: Props) => props.margin || "0px"};
`;
