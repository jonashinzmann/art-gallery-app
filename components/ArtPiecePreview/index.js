import Image from "next/image";

export default function ArtPiecePreview({ image, artist, title }) {
  return (
    <>
      <h1>Artist: {artist}</h1>
      <h2>Title: {title}</h2>
      <Image
        src={image.imageSource}
        height={image.dimensions.height * 0.1}
        width={image.dimensions.width * 0.1}
        alt={image.name}
      />
    </>
  );
}
