import React, { useEffect, useRef } from "react";
import "setimmediate";

import Animated, { Easing } from "react-native-reanimated";

import { Container } from "./Circle.style";

const { Value, timing } = Animated;

interface CircleProps {
  color: string;
  width: string;
  height: string;
  opacity: string;
  top: string;
  left: string;
}

export function Circle({
  color,
  width,
  height,
  opacity,
  top,
  left,
}: CircleProps) {
  let transX = new Value(0);
  const config = {
    duration: 3000,
    toValue: new Value(600),
    easing: Easing.inOut(Easing.ease),
  };
  const anim = timing(transX, config);
  useEffect(() => {
    anim.start();
  }, []);

  return (
    <Animated.View
      style={[
        { backgroundColor: "red", width: 50, height: 50 },
        { transform: [{ translateX: transX }] },
      ]}
    />
  );
}
