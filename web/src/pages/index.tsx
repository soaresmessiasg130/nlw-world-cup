interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1 className="text-teal-900 text-xl">Hello, world!!!(::)</h1>
      <p className="text-teal-700 text-lg">You have {props.count} pools</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");

  const data = await response.json();

  console.log(data);

  return {
    props: {
      count: data.count,
    },
  };
};
