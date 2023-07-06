import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

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

  function getRandomPiece() {
    const length = data.length;
    const randomIndex = Math.floor(Math.random() * length);
    return data[randomIndex];
  }

  if (error !== undefined) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const pieces = data;
  const name = data.map((artPiece) => {
    return artPiece.name;
  });
  const title = data.map((artPiece) => {
    return artPiece.title;
  });

  const randomPiece = getRandomPiece();
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
      ></Spotlight>
    </>
  );
}
