"use client";

import { useState } from "react";
import TopPodcast from "./components/top-podcast/top-podcast";
import TopEpisodes from "./components/top-episodes/top-episodes";
import Header from "./components/header/header";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("فنجان");

  return (
    <>
      <Header searchTerm={searchText} setSearchText={setSearchText} />
      <main className="flex flex-col gap-20">
        <TopPodcast searchTerm={searchText} />
        <TopEpisodes searchTerm={searchText} />
      </main>
    </>
  );
}
