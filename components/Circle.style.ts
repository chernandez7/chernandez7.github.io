import styled from "styled-components/native";
import Animated from "react-native-reanimated";

interface ContainerProps {
  color: string;
  width: string;
  height: string;
  opacity: string;
}
export const Container = styled(Animated.View)<ContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  z-index: 1;
`;
