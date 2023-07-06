import ArtPiecePreview from "@/components/ArtPiecePreview";
import useSWR from "swr";

export default function Page() {
  async function fetcher(url) {
    const response = await fetch(url);
    const parsedJson = await response.json();
    console.log(parsedJson);
    return parsedJson;
  }
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error !== undefined) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ArtPiecePreview
      image={data[0]}
      title={data[0].name}
      artist={data[0].artist}
    />
  );
}