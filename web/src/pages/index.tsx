import Image from "next/image";
import usersAvatarExample from "../assets/users-avatar-example.png";
import appNlwCopaPreview from "../assets/app-nlw-copa-preview.png";
import iconCheck from "../assets/icon-check.svg";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] mx-auto h-screen grid grid-cols-2 gap-20 items-center">
      <main>
        <Image src={logo} alt="NLW Copa" />

        <h1 className="mt-16 text-white text-5xl font-bold leading-light">
          Crie seu próprio bolão da copa e compartilhe com amigos!
        </h1>

        <div className="flex items-center gap-2 mt-10">
          <Image src={usersAvatarExample} alt={""} />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12989</span> pessoas já estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2 ">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />

          <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-4 rounded text-sm font-bold text-gray-900">
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar seus amigos
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt={""} />

            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>

              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"></div>

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt={""} />

            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>

              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appNlwCopaPreview}
        alt={
          "Dois celulares mostrando uma prévia da aplicação móvel do NLW Copa"
        }
        quality={100}
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3333/pools/count");

//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       count: data.count,
//     },
//   };
// };
