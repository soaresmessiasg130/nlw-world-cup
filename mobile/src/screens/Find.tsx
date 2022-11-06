import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import Button from "../components/Button";

export default function Find() {
  return (
    <VStack flex={1} bg={"gray.900"}>
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems={"center"}>
        <Heading
          fontFamily={"heading"}
          textAlign={"center"}
          fontSize={"xl"}
          color={"white"}
          mb={8}
        >
          Encontre um bolão através do {"\n"}
          seu código único
        </Heading>

        <Input placeholder={"Qual o código do bolão?"} mb={2} />

        <Button title={"BUSCAR BOLÃO"} />
      </VStack>
    </VStack>
  );
}
