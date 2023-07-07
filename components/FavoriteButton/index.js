import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <>
      <input
        type="checkbox"
        checked={isFavorite}
        onChange={() => onToggleFavorite(slug)}
      />
    </>
  );
}
