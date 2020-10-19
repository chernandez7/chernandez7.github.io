// @generated: @expo/next-adapter@2.1.40
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <View style={styles.container}>
      <Section></Section>
    </View>
  );
}

const Section = styled.View`
  width: 100%;
  height: 50%;
  background-color: black;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
