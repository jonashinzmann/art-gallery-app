import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useState } from "react";
import useSWR from "swr";
import Layout from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  async function myFetcher() {
    const response = await fetch("https://example-apis.vercel.app/api/art");
    const parsedJson = await response.json();
    return parsedJson;
  }
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    myFetcher
  );

  if (error !== undefined) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Layout />
    </>
  );
}
