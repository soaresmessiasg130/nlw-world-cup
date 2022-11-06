import React from "react";
import {
  Button as ButtonNativeBase,
  IButtonProps,
  Icon,
  Text,
} from "native-base";
import { Fontisto } from "@expo/vector-icons";

export default function Button({
  title,
  type = "PRIMARY",
  leftIconName,
  ...rest
}: ButtonProps) {
  return (
    <ButtonNativeBase
      w={"full"}
      h={14}
      rounded={"sm"}
      fontSize={"md"}
      textTransform={"uppercase"}
      bg={type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECONDARY" ? "red.600" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: "white" },
      }}
      leftIcon={
        leftIconName ? (
          <Icon
            as={Fontisto}
            name={leftIconName}
            color={type === "SECONDARY" ? "white" : "black"}
            size={"md"}
          />
        ) : undefined
      }
      {...rest}
    >
      <Text
        fontSize={"sm"}
        fontFamily={"heading"}
        color={type === "SECONDARY" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}

interface ButtonProps extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
  leftIconName?: string;
}
