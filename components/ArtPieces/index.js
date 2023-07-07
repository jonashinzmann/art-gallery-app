import Image from "next/image";
import { uid } from "uid";
import Link from "next/link";
import { Fragment } from "react";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieces({ pieces, artPiecesInfo }) {
  return (
    <ul>
      {artPiecesInfo.map((artPiece) => {
        return (
          <fragment key={uid()}>
            <Link href={`/art-pieces/${artPiece.slug}`}>
              <li>{artPiece.name}</li>
            </Link>
            <FavoriteButton isFavorite={artPiece.isFavorite} />
          </fragment>
        );
      })}
    </ul>
  );
}
