import { Center, Text } from "native-base";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";

export default function SignIn() {
  return (
    <Center flex={1} bgColor={"gray.900"} p={7}>
      <Logo width={212} height={40} />

      <Button title="ENTRAR COM GOOGLE" leftIconName="google" mt={12} />

      <Text color={"white"} mt={4}>
        Não utilizamos nenhuma informações além {"\n"} do seu e-mail para
        criação de sua conta.
      </Text>
    </Center>
  );
}
