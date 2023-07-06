import Image from "next/image";
import { uid } from "uid";
import Link from "next/link";
import { Fragment } from "react";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((artPiece) => {
        return (
          <fragment key={uid()}>
            <Link href={`/art-pieces/${artPiece.slug}`}>
              <li>{artPiece.name}</li>
            </Link>
          </fragment>
        );
      })}
    </ul>
  );
}
