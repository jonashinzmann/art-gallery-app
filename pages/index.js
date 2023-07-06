import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

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
  const pieces = data.map((artPiece) => {
    return artPiece.name;
  });
  const name = data.map((artPiece) => {
    return artPiece.name;
  });
  const title = data.map((artPiece) => {
    return artPiece.title;
  });
  const image = data.map((artPiece) => {
    return artPiece;
  });
  return (
    <>
      {" "}
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
      <Link href="/ArtPiecePreview">
        Orange Red and Green Abstract Painting
      </Link>
    </>
  );
}
