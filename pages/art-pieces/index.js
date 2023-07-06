import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      {" "}
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
