import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface ColorBlockSectionProps {
  color: string;
  height: string;
}

export const ColorBlockSection = styled.View<ColorBlockSectionProps>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
`;

export const TextContainer = styled.View`
  flex: 1;
  width: 100%;
  max-width: 1000;
  flex-direction: column;
  align-content: center;
`;

export const Title = styled.Text``;

export const Text = styled.Text``;
