import React from "react";
import { AppLoading } from "expo";
// import { useFonts, FontDisplay } from "expo-font";

import {
  Container,
  ColorBlockSection,
  TextContainer,
  Title,
  Text,
} from "./index.style";
import { Circle } from "../components/Circle";

export default function App() {
  /* const [fontsLoaded] = useFonts({
    "Graphik-Light": {
      uri: require("../assets/fonts/Graphik-Light.ttf"),
      display: FontDisplay.SWAP,
    },
    "Graphik-SemiBold": {
      uri: require("../assets/fonts/Graphik-SemiboldItalic.ttf"),
      display: FontDisplay.SWAP,
    },
  });

  if (!fontsLoaded) return <AppLoading />; */

  return (
    <Container>
      <ColorBlockSection color={`#F9F9F9`} height={`75%`}>
        <TextContainer>
          <Title>{`Innovating away`}</Title>
          <Text>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>
        </TextContainer>
        <Circle
          color={`#E6D2AF`}
          width={`550px`}
          height={`550px`}
          opacity={`60%`}
          top={`60%`}
          left={`80px`}
        />
        <Circle
          color={`#C13B48`}
          width={`355px`}
          height={`355px`}
          opacity={`60%`}
          top={`-175px`}
          left={`70%`}
        />
        <Circle
          color={`#A6A493`}
          width={`230px`}
          height={`230px`}
          opacity={`60%`}
          top={`60%`}
          left={`15%`}
        />
        <Circle
          color={`#EDB964`}
          width={`230px`}
          height={`230px`}
          opacity={`60%`}
          top={`-115px`}
          left={`-115px`}
        />
      </ColorBlockSection>
      <ColorBlockSection color={`#1A1F1D`} height={`25%`}></ColorBlockSection>
    </Container>
  );
}
