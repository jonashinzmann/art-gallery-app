import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Artist: {artist}</h2>
      <div>
        <Image src={image} alt="Artwork" width={500} height={300} />
      </div>
      <div></div>
    </div>
  );
}
