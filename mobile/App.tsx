import { StatusBar } from "expo-status-bar";
import { Center, NativeBaseProvider, VStack, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />

      <Center flex={1} bgColor={"black"}>
        <Text color={"white"} fontSize={24}>
          Hello, React Native!!!
        </Text>
      </Center>
    </NativeBaseProvider>
  );
}
