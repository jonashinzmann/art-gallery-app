import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  image,
  artist,
  title,
  isFavorite,
  slug,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>Artist: {artist}</h2>
      <div>
        <Image src={image} alt={title} width={500} height={300} />
      </div>
      <FavoriteButton
        isFavorite={isFavorite}
        slug={slug}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
