import Link from "next/link";
import { Fragment } from "react";

export default function Layout({ pieces }) {
  return (
    <>
      <Link href="/">Spotlight</Link>
      <br />
      <Link href="/art-pieces">Pieces</Link>
    </>
  );
}
