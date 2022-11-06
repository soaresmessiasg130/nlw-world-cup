import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import Button from "../components/Button";

export default function New() {
  return (
    <VStack flex={1} bg={"gray.900"}>
      <Header title="Criar novo bolão" />

      <VStack mt={5} mx={5} alignItems={"center"}>
        <Logo />

        <Heading
          fontFamily={"heading"}
          color={"white"}
          fontSize={"xl"}
          my={8}
          textAlign={"center"}
        >
          Crie seu próprio bolão da copa {"\n"}
          e compartilhe entre amigos!
        </Heading>

        <Input placeholder={"Qual o nome do seu bolão?"} mb={2} />

        <Button title={"CRIAR MEU BOLÃO"} />

        <Text
          color={"gray.200"}
          textAlign={"center"}
          fontSize={"sm"}
          px={10}
          mt={4}
        >
          Após criar seu bolão, você receberá {"\n"}
          um código único que poderá usar para {"\n"}
          convidar outras pessoas
        </Text>
      </VStack>
    </VStack>
  );
}
