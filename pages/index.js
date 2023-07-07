import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  function getRandomPiece() {
    const length = pieces.length;
    const randomIndex = Math.floor(Math.random() * length);
    return pieces[randomIndex];
  }

  const randomPiece = getRandomPiece();

  return (
    <>
      <h1>Art Gallery</h1>

      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
      ></Spotlight>
    </>
  );
}
