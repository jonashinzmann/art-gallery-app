import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useState } from "react";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  async function fetcher() {
    const response = await fetch("https://example-apis.vercel.app/api/art");
    const parsedJson = await response.json();
    return parsedJson;
  }
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log("Data", data);

  const [globalData, setGlobalData] = useState(data);

  if (error !== undefined) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
      <GlobalStyle />
      <Component {...pageProps} globalData={globalData} />
    </SWRConfig>
  );
}
