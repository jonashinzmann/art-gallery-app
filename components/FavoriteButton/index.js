import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  console.log("isFavorite", isFavorite);

  return (
    <>
      <input
        type="checkbox"
        checked={isFavorite} /*onChange={() => onToggleFavorite}*/
      />
    </>
  );
}
