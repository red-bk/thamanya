import { NextResponse } from "next/server";
import { itunesSearch } from "@/app/constant/endpoints";
import prisma from "@/app/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get("term");
    const entity = searchParams.get("entity"); 

    // Ensure "term" is present
    if (!searchTerm) {
      return NextResponse.json(
        { error: "Missing 'term' query parameter." },
        { status: 400 }
      );
    }

  
    const itunesURL = `${itunesSearch}?${searchParams.toString()}`;
    const res = await fetch(itunesURL);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from iTunes API." },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Save to different tables based on entity type
    if (data.results && data.results.length > 0) {
      try {
        for (const item of data.results) {
          // Check if this is a podcast or episode based on entity parameter
          if (entity === "podcastEpisode") {
            // Save to Episode table
            if (item.trackName) {
              await prisma.episode.create({
                data: {
                  trackName: item.trackName || "no track name",
                  collectionName: item.collectionName || "no collection name",
                  artworkUrl60: item.artworkUrl60,
                  artworkUrl160: item.artworkUrl160,
                  releaseDate: item.releaseDate
                    ? new Date(item.releaseDate)
                    : null,
                  trackTimeMillis: item.trackTimeMillis,
                  searchTerm: searchTerm,
                },
              });
            }
          } else if (!entity) {
            // Save to Podcast table (default)
            if (item.trackName) {
              await prisma.podcast.create({
                data: {
                  trackName: item.trackName || "no track name",
                  artistName: item.artistName || "no artist name",
                  artworkUrl100: item.artworkUrl100,
                  artworkUrl600: item.artworkUrl600,
                  collectionName: item.collectionName,
                  searchTerm: searchTerm,
                },
              });
            }
          }
        }

        const tableUsed = entity === "podcastEpisode" ? "episodes" : "podcasts";
        console.log(`Saved ${data.results.length} ${tableUsed} to database`);
      } catch (dbError) {
        console.error("Database save error:", dbError);
        // Continue and return the API data even if DB save fails
      }
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("iTunes API error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
