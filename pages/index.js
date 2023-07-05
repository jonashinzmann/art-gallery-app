import useSWR from "swr";
import Image from "next/image";

export default function HomePage() {
  async function fetcher() {
    const response = await fetch("https://example-apis.vercel.app/api/art");
    const parsedJson = await response.json();
    console.log(parsedJson);
    return parsedJson;
  }
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);

  if (error !== undefined) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {" "}
      <h1>Art Gallery</h1>
      <ul>
        <li>
          {data[0].artist} {data[0].name}{" "}
          <Image
            src={data[0].imageSource}
            height={data[0].dimensions.height}
            width={data[0].dimensions.width}
            alt=""
          />
        </li>
      </ul>
    </>
  );
}
