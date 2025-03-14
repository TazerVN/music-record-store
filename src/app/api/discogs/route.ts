// app/api/discogs/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("fetching");
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.toString();

    console.log("Query received:", query);

    if (!query) {
      console.log("No query parameter provided");
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }

    const discogsApiUrl = `https://api.discogs.com/database/search?${query}`;
    console.log("Fetching from URL:", discogsApiUrl);

    // Attempt the fetch with detailed error handling
    let response;
    try {
      response = await fetch(discogsApiUrl, {
        headers: {
          "User-Agent": "MyMusicApp/1.0 +http://localhost:3000 (development)",
          Authorization:
            "Discogs token=AOadKQXLEFxnQwtkCfphJPKirdoIuYXsQtsYLKaL",
        },
        next: { revalidate: 3600 },
      });

      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        // Try to get the response body for more details
        const errorText = await response.text();
        console.error("Error response body:", errorText);
        throw new Error(`Discogs API error: ${response.status} - ${errorText}`);
      }
    } catch (fetchError) {
      console.error("Fetch operation failed:", fetchError);
      return NextResponse.json(
        {
          error: "Fetch operation failed",
          details:
            fetchError instanceof Error
              ? fetchError.message
              : String(fetchError),
        },
        { status: 500 }
      );
    }

    // Parse the JSON response
    let data;
    try {
      data = await response.json();
      console.log("Response parsed successfully");
    } catch (jsonError) {
      console.error("JSON parsing failed:", jsonError);
      return NextResponse.json(
        {
          error: "Failed to parse response as JSON",
          details:
            jsonError instanceof Error ? jsonError.message : String(jsonError),
        },
        { status: 500 }
      );
    }

    // Return successful response
    return NextResponse.json(data);
  } catch (error) {
    // Catch-all for any other errors
    console.error("Unhandled error in API route:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
export const runtime = "edge";
