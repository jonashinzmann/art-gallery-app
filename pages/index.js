import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function HomePage({ globalData }) {
  const pieces = globalData;
  console.log("globalData", globalData);

  /*const name = data.map((artPiece) => {
    return artPiece.name;
  });
  const title = data.map((artPiece) => {
    return artPiece.title;
  });
  const image = data.map((artPiece) => {
    return artPiece;
  });*/

  return (
    <>
      {" "}
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
